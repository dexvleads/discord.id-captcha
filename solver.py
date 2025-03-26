import base64, struct, hashlib, random, requests

class PoW:
    def __init__(self, endpoint: str, sitekey: str) -> None:
        self.result = requests.get(f"{endpoint}/api/v1/puzzle?sitekey={sitekey}").json().get("data").get("puzzle")
        self.signature, self.puzzle = self.result.split(".")
        self.parsed = self.parse_puzzle(self.puzzle)

    def parse_puzzle(self, puzzle: str) -> dict:
        puzzle = base64.b64decode(puzzle)
        amount, diff = struct.unpack("<BB", puzzle[14:16])
        
        return {
            "amount": amount,
            "diff": diff,
            "puzzle": puzzle,
        }

    def solve(self) -> str:
        puzzle = self.parsed["puzzle"]
        threshold = int(2 ** ((255.999 - self.parsed["diff"]) / 8))
        padded = puzzle.ljust(128, b'\x00')
        
        solutions = []
        for _ in range(self.parsed["amount"]):
            while True:
                solution = struct.pack("<Q", random.getrandbits(64))
                attempt = padded[:120] + solution
                hashed = hashlib.blake2b(attempt, digest_size=32).digest()
                
                if int.from_bytes(hashed[:4], "little") < threshold:
                    solutions.append(solution)
                    break

        solutions = base64.b64encode(b"".join(solutions)).decode()
        return f"{self.signature}.{self.puzzle}.{solutions}.AgAA"
    
    def check(self, token: str) -> bool:
        try:
            parts = token.split(".")
            if len(parts) != 4: return False
            signature, puzzle, solutions, suffix = parts
            puzzle = base64.b64decode(puzzle)
            padded = puzzle.ljust(128, b'\x00')
            amount, diff = struct.unpack("<BB", puzzle[14:16])
            threshold = int(2 ** ((255.999 - diff) / 8))
            sols = base64.b64decode(solutions)
            if len(sols) != amount * 8: return False

            for i in range(amount):
                solution = sols[i*8:(i+1)*8]
                attempt = padded[:120] + solution
                hashed = hashlib.blake2b(attempt, digest_size=32).digest()
                if int.from_bytes(hashed[:4], "little") >= threshold: return False

            return True
        
        except Exception:
            return False
        
