# [discord.id](https://discord.id/) Captcha Reversed

just a simple PoW nothing special.

![image](https://github.com/user-attachments/assets/a17a48d7-bbf6-4e89-a84d-eac3d87baa77)

## how the PoW works

1. the puzzle data is extended with zeros until it is 128 bytes long
2. the last 8 bytes of the solution needs to be "brute forced" until the hash of the entire buffer is a specific thing
3. the buffer is hashed using blake2b-256
4. the first 4 bytes of the hash are compared to a threshold based on the difficulty
5. this process is repeated depending on the amount gotten from the puzzle
6. the valid hashes are base64 encoded and pushed to a list

Final result looks something like this
```
signature + original puzzle (b64) + the solution (b64) + some kind of suffix? (static)
```

## the WASM implementation

The PoW uses wasm for hashing and such

```wat
(func $solveBlake2b (;10;) (export "solveBlake2b") (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    local.get $var0
    i32.load offset=8
    i32.const 128
    i32.ne
    if
      i32.const 1232
      i32.const 1280
      i32.const 31
      i32.const 9
      call $env.abort
      unreachable
    end
    local.get $var0
    i32.load
    local.set $var4
    call $func8
    local.tee $var3
    i32.load offset=4
    local.set $var5
    local.get $var3
    i64.const 128
    i64.store offset=8
    local.get $var4
    i32.load offset=124
    local.tee $var0
    local.get $var2
    i32.add
    local.set $var6
    loop $label0
      local.get $var0
      local.get $var6
      i32.lt_u
      if
        ;; trying a solution
        local.get $var4
        local.get $var0
        i32.store offset=124
        ;; BLAKE2b hashing
        local.get $var3
        i32.load offset=4
        local.tee $var2
        i32.load offset=4
        local.get $var3
        i32.load offset=156
        i64.extend_i32_u
        i64.const 7640891576939301128
        i64.xor
        i64.store
        local.get $var2
        i32.load offset=4
        i64.const -4942790177534073029
        i64.store offset=8
        local.get $var2
        i32.load offset=4
        i64.const 4354685564936845355
        i64.store offset=16
        local.get $var2
        i32.load offset=4
        i64.const -6534734903238641935
        i64.store offset=24
        local.get $var2
        i32.load offset=4
        i64.const 5840696475078001361
        i64.store offset=32
        local.get $var2
        i32.load offset=4
        i64.const -7276294671716946913
        i64.store offset=40
        local.get $var2
        i32.load offset=4
        i64.const 2270897969802886507
        i64.store offset=48
        local.get $var2
        i32.load offset=4
        i64.const 6620516959819538809
        i64.store offset=56
        local.get $var3
        local.get $var4
        call $func9
        local.get $var5
        i32.load offset=4
        i64.load
        i32.wrap_i64
        local.get $var1
        i32.lt_u
        if
          ;; found a solution
          i32.const 0
          local.get $var5
          i32.load
          local.tee $var1
          i32.const 16
          i32.sub
          i32.load offset=12
          local.tee $var2
          i32.gt_u
          if
            i32.const 1520
            i32.const 1584
            i32.const 1741
            i32.const 5
            call $env.abort
            unreachable
          end
          i32.const 12
          i32.const 3
          call $__alloc
          local.tee $var0
          local.get $var1
          i32.store
          local.get $var0
          local.get $var2
          i32.store offset=8
          local.get $var0
          local.get $var1
          i32.store offset=4
          local.get $var0
          return
        end
        local.get $var0
        i32.const 1
        i32.add
        local.set $var0
        br $label0
      end
    end $label0
    ;; no solution found
    i32.const 12
    i32.const 3
    call $__alloc
    i32.const 0
    i32.const 0
    call $func7
)
```

## how i figured it out

people are over exaggerating "reverse engineering", its simple to just read something and understand how it works.

all you need to know is the basics of for example webassembly and everything will be easy for you.

this is how i reversed this 

1. opened dev tools (your best friend)
2. looking at the network tab to see what requests its making
3. saw that its loading [captcha.js](https://discord.id/js/captcha.js) (the main captcha script)
4. just read the code and see how it initiates wasm or what happens when you click the verify button etc, etc
5. i saw that it "failbacks" to js if wasm fails, so that makes it even easier to figure out but i still went with wasm
6. the js code fetches the puzzle from the [api/v1/puzzle](https://lookup.discord.id/api/v1/puzzle?sitekey=NKF030305ByxwkklC3Cr18nTGqMheV) endpoint
7. and send it to wasm and the hasing is done in wasm.

as simple as that

# Credits
* **DEXV** - *Shit head (retarded)* - [DEXV](https://dexv.lol) - Main Author
