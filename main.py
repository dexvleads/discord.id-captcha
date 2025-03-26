from dexvstuff import Logger
from solver import PoW
import requests, time

log = Logger()

def lookup(id: str) -> dict:
    start = time.time()
    pow = PoW("https://lookup.discord.id", "NKF030305ByxwkklC3Cr18nTGqMheV")
    solved = pow.solve()
    log.info(f"Solved -> {pow.signature}", start=start, end=time.time())

    response = requests.post('https://lookup.discord.id/api/lookup/sendLookup', json={
        'captcha': solved,
        'inputid': id,
    })

    return response.json()

print(lookup("1327769168014999612"))