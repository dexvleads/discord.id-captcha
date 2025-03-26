(module
  (func $env.abort (;0;) (import "env" "abort") (param i32 i32 i32 i32))
  (memory $memory (;0;) (export "memory") 1)
  (global $global0 (mut i32) (i32.const 0))
  (global $global1 (mut i32) (i32.const 0))
  (global $Uint8Array_ID (;2;) (export "Uint8Array_ID") i32 (i32.const 3))
  (global $__rtti_base (;3;) (export "__rtti_base") i32 (i32.const 1632))
  (start $func11)
  (func $__alloc (;1;) (export "__alloc") (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    local.get $var0
    i32.const 1073741808
    i32.gt_u
    if
      unreachable
    end
    global.get $global1
    i32.const 16
    i32.add
    local.tee $var4
    local.get $var0
    i32.const 15
    i32.add
    i32.const -16
    i32.and
    local.tee $var2
    i32.const 16
    local.get $var2
    i32.const 16
    i32.gt_u
    select
    local.tee $var6
    i32.add
    local.tee $var2
    memory.size
    local.tee $var5
    i32.const 16
    i32.shl
    local.tee $var3
    i32.gt_u
    if
      local.get $var5
      local.get $var2
      local.get $var3
      i32.sub
      i32.const 65535
      i32.add
      i32.const -65536
      i32.and
      i32.const 16
      i32.shr_u
      local.tee $var3
      local.get $var5
      local.get $var3
      i32.gt_s
      select
      memory.grow
      i32.const 0
      i32.lt_s
      if
        local.get $var3
        memory.grow
        i32.const 0
        i32.lt_s
        if
          unreachable
        end
      end
    end
    local.get $var2
    global.set $global1
    local.get $var4
    i32.const 16
    i32.sub
    local.tee $var2
    local.get $var6
    i32.store
    local.get $var2
    i32.const 1
    i32.store offset=4
    local.get $var2
    local.get $var1
    i32.store offset=8
    local.get $var2
    local.get $var0
    i32.store offset=12
    local.get $var4
  )
  (func $__retain (;2;) (export "__retain") (param $var0 i32) (result i32)
    local.get $var0
  )
  (func $__release (;3;) (export "__release") (param $var0 i32)
    nop
  )
  (func $__collect (;4;) (export "__collect")
    nop
  )
  (func $__reset (;5;) (export "__reset")
    global.get $global0
    global.set $global1
  )
  (func $func6 (param $var0 i32) (param $var1 i32)
    (local $var2 i32)
    block $label0
      local.get $var1
      i32.eqz
      br_if $label0
      local.get $var0
      i32.const 0
      i32.store8
      local.get $var0
      local.get $var1
      i32.add
      i32.const 4
      i32.sub
      local.tee $var2
      i32.const 0
      i32.store8 offset=3
      local.get $var1
      i32.const 2
      i32.le_u
      br_if $label0
      local.get $var0
      i32.const 0
      i32.store8 offset=1
      local.get $var0
      i32.const 0
      i32.store8 offset=2
      local.get $var2
      i32.const 0
      i32.store8 offset=2
      local.get $var2
      i32.const 0
      i32.store8 offset=1
      local.get $var1
      i32.const 6
      i32.le_u
      br_if $label0
      local.get $var0
      i32.const 0
      i32.store8 offset=3
      local.get $var2
      i32.const 0
      i32.store8
      local.get $var1
      i32.const 8
      i32.le_u
      br_if $label0
      local.get $var0
      i32.const 0
      local.get $var0
      i32.sub
      i32.const 3
      i32.and
      local.tee $var2
      i32.add
      local.tee $var0
      i32.const 0
      i32.store
      local.get $var0
      local.get $var1
      local.get $var2
      i32.sub
      i32.const -4
      i32.and
      local.tee $var2
      i32.add
      i32.const 28
      i32.sub
      local.tee $var1
      i32.const 0
      i32.store offset=24
      local.get $var2
      i32.const 8
      i32.le_u
      br_if $label0
      local.get $var0
      i32.const 0
      i32.store offset=4
      local.get $var0
      i32.const 0
      i32.store offset=8
      local.get $var1
      i32.const 0
      i32.store offset=16
      local.get $var1
      i32.const 0
      i32.store offset=20
      local.get $var2
      i32.const 24
      i32.le_u
      br_if $label0
      local.get $var0
      i32.const 0
      i32.store offset=12
      local.get $var0
      i32.const 0
      i32.store offset=16
      local.get $var0
      i32.const 0
      i32.store offset=20
      local.get $var0
      i32.const 0
      i32.store offset=24
      local.get $var1
      i32.const 0
      i32.store
      local.get $var1
      i32.const 0
      i32.store offset=4
      local.get $var1
      i32.const 0
      i32.store offset=8
      local.get $var1
      i32.const 0
      i32.store offset=12
      local.get $var0
      local.get $var0
      i32.const 4
      i32.and
      i32.const 24
      i32.add
      local.tee $var1
      i32.add
      local.set $var0
      local.get $var2
      local.get $var1
      i32.sub
      local.set $var1
      loop $label1
        local.get $var1
        i32.const 32
        i32.ge_u
        if
          local.get $var0
          i64.const 0
          i64.store
          local.get $var0
          i64.const 0
          i64.store offset=8
          local.get $var0
          i64.const 0
          i64.store offset=16
          local.get $var0
          i64.const 0
          i64.store offset=24
          local.get $var1
          i32.const 32
          i32.sub
          local.set $var1
          local.get $var0
          i32.const 32
          i32.add
          local.set $var0
          br $label1
        end
      end $label1
    end $label0
  )
  (func $func7 (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    block (result i32)
      local.get $var0
      i32.eqz
      if
        i32.const 12
        i32.const 2
        call $__alloc
        local.set $var0
      end
      local.get $var0
    end
    i32.const 0
    i32.store
    local.get $var0
    i32.const 0
    i32.store offset=4
    local.get $var0
    i32.const 0
    i32.store offset=8
    local.get $var1
    i32.const 1073741808
    local.get $var2
    i32.shr_u
    i32.gt_u
    if
      i32.const 1344
      i32.const 1392
      i32.const 18
      i32.const 57
      call $env.abort
      unreachable
    end
    local.get $var1
    local.get $var2
    i32.shl
    local.tee $var1
    i32.const 0
    call $__alloc
    local.tee $var2
    local.get $var1
    call $func6
    local.get $var0
    i32.load
    drop
    local.get $var0
    local.get $var2
    i32.store
    local.get $var0
    local.get $var2
    i32.store offset=4
    local.get $var0
    local.get $var1
    i32.store offset=8
    local.get $var0
  )
  (func $func8 (result i32)
    (local $var0 i32)
    (local $var1 i32)
    i32.const 160
    i32.const 0
    call $__alloc
    local.tee $var0
    i32.const 12
    i32.const 3
    call $__alloc
    i32.const 128
    i32.const 0
    call $func7
    i32.store
    local.get $var0
    i32.const 12
    i32.const 4
    call $__alloc
    i32.const 8
    i32.const 3
    call $func7
    i32.store offset=4
    local.get $var0
    i64.const 0
    i64.store offset=8
    local.get $var0
    i32.const 0
    i32.store offset=16
    local.get $var0
    i64.const 0
    i64.store offset=24
    local.get $var0
    i64.const 0
    i64.store offset=32
    local.get $var0
    i64.const 0
    i64.store offset=40
    local.get $var0
    i64.const 0
    i64.store offset=48
    local.get $var0
    i64.const 0
    i64.store offset=56
    local.get $var0
    i64.const 0
    i64.store offset=64
    local.get $var0
    i64.const 0
    i64.store offset=72
    local.get $var0
    i64.const 0
    i64.store offset=80
    local.get $var0
    i64.const 0
    i64.store offset=88
    local.get $var0
    i64.const 0
    i64.store offset=96
    local.get $var0
    i64.const 0
    i64.store offset=104
    local.get $var0
    i64.const 0
    i64.store offset=112
    local.get $var0
    i64.const 0
    i64.store offset=120
    local.get $var0
    i64.const 0
    i64.store offset=128
    local.get $var0
    i64.const 0
    i64.store offset=136
    local.get $var0
    i64.const 0
    i64.store offset=144
    i32.const 128
    i32.const 5
    call $__alloc
    local.tee $var1
    i32.const 128
    call $func6
    local.get $var0
    local.get $var1
    i32.store offset=152
    local.get $var0
    i32.const 32
    i32.store offset=156
    local.get $var0
  )
  (func $func9 (param $var0 i32) (param $var1 i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i64)
    (local $var7 i64)
    (local $var8 i64)
    (local $var9 i64)
    (local $var10 i64)
    (local $var11 i64)
    (local $var12 i64)
    (local $var13 i64)
    (local $var14 i64)
    (local $var15 i64)
    (local $var16 i64)
    (local $var17 i64)
    (local $var18 i64)
    (local $var19 i64)
    (local $var20 i64)
    (local $var21 i64)
    (local $var22 i64)
    (local $var23 i64)
    (local $var24 i64)
    local.get $var0
    i32.load offset=4
    local.set $var2
    local.get $var0
    i32.load offset=152
    local.tee $var3
    local.set $var5
    loop $label0
      local.get $var4
      i32.const 128
      i32.lt_s
      if
        local.get $var4
        local.get $var5
        i32.add
        local.get $var1
        local.get $var4
        i32.add
        i64.load
        i64.store
        local.get $var4
        i32.const 8
        i32.add
        local.set $var4
        br $label0
      end
    end $label0
    local.get $var2
    i32.load offset=4
    i64.load
    local.set $var14
    local.get $var2
    i32.load offset=4
    i64.load offset=8
    local.set $var15
    local.get $var2
    i32.load offset=4
    i64.load offset=16
    local.set $var9
    local.get $var2
    i32.load offset=4
    i64.load offset=24
    local.set $var16
    local.get $var2
    i32.load offset=4
    i64.load offset=32
    local.set $var10
    local.get $var2
    i32.load offset=4
    i64.load offset=40
    local.set $var11
    local.get $var2
    i32.load offset=4
    i64.load offset=48
    local.set $var12
    local.get $var2
    i32.load offset=4
    i64.load offset=56
    local.set $var13
    i64.const 7640891576956012808
    local.set $var6
    i64.const -4942790177534073029
    local.set $var7
    i64.const 4354685564936845355
    local.set $var19
    i64.const -6534734903238641935
    local.set $var8
    local.get $var0
    i64.load offset=8
    i64.const 5840696475078001361
    i64.xor
    local.set $var17
    i64.const -7276294671716946913
    local.set $var20
    i64.const -2270897969802886508
    local.set $var18
    i64.const 6620516959819538809
    local.set $var21
    i32.const 0
    local.set $var4
    loop $label1
      local.get $var4
      i32.const 192
      i32.lt_s
      if
        local.get $var10
        local.get $var6
        local.get $var17
        local.get $var14
        local.get $var10
        local.get $var3
        local.get $var4
        i32.const 1024
        i32.add
        local.tee $var1
        i32.load8_u
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var14
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var6
        i64.add
        local.tee $var17
        i64.xor
        i64.const 24
        i64.rotr
        local.set $var10
        local.get $var17
        local.get $var6
        local.get $var14
        local.get $var10
        local.get $var3
        local.get $var1
        i32.load8_u offset=1
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var14
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var6
        i64.add
        local.set $var22
        local.get $var12
        local.get $var19
        local.get $var18
        local.get $var9
        local.get $var12
        local.get $var3
        local.get $var1
        i32.load8_u offset=4
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var19
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var17
        i64.add
        local.tee $var18
        i64.xor
        i64.const 24
        i64.rotr
        local.set $var12
        local.get $var13
        local.get $var8
        local.get $var21
        local.get $var16
        local.get $var13
        local.get $var3
        local.get $var1
        i32.load8_u offset=6
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var9
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var16
        i64.add
        local.tee $var8
        i64.xor
        i64.const 24
        i64.rotr
        local.set $var13
        local.get $var8
        local.get $var16
        local.get $var9
        local.get $var13
        local.get $var3
        local.get $var1
        i32.load8_u offset=7
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var16
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var8
        i64.add
        local.set $var9
        local.get $var19
        local.get $var12
        local.get $var3
        local.get $var1
        i32.load8_u offset=5
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var23
        local.get $var17
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var24
        local.get $var18
        i64.add
        local.tee $var17
        local.get $var8
        local.get $var14
        local.get $var11
        local.get $var7
        local.get $var20
        local.get $var15
        local.get $var11
        local.get $var3
        local.get $var1
        i32.load8_u offset=2
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var15
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var7
        i64.add
        local.tee $var20
        i64.xor
        i64.const 24
        i64.rotr
        local.tee $var11
        local.get $var20
        local.get $var7
        local.get $var15
        local.get $var11
        local.get $var3
        local.get $var1
        i32.load8_u offset=3
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var15
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var7
        i64.add
        local.tee $var18
        i64.xor
        i64.const 63
        i64.rotr
        local.tee $var14
        local.get $var3
        local.get $var1
        i32.load8_u offset=8
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var19
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var8
        i64.add
        local.tee $var11
        local.get $var19
        local.get $var11
        local.get $var14
        i64.xor
        i64.const 24
        i64.rotr
        local.tee $var20
        local.get $var3
        local.get $var1
        i32.load8_u offset=9
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var14
        local.get $var8
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var21
        i64.add
        local.tee $var19
        local.get $var20
        i64.xor
        i64.const 63
        i64.rotr
        local.set $var11
        local.get $var9
        local.get $var6
        local.get $var15
        local.get $var12
        local.get $var17
        i64.xor
        i64.const 63
        i64.rotr
        local.tee $var15
        local.get $var3
        local.get $var1
        i32.load8_u offset=10
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var6
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var8
        i64.add
        local.tee $var12
        local.get $var6
        local.get $var12
        local.get $var15
        i64.xor
        i64.const 24
        i64.rotr
        local.tee $var6
        local.get $var3
        local.get $var1
        i32.load8_u offset=11
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var15
        local.get $var8
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var17
        i64.add
        local.tee $var8
        local.get $var6
        i64.xor
        i64.const 63
        i64.rotr
        local.set $var12
        local.get $var22
        local.get $var7
        local.get $var23
        local.get $var9
        local.get $var13
        i64.xor
        i64.const 63
        i64.rotr
        local.tee $var9
        local.get $var3
        local.get $var1
        i32.load8_u offset=12
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var6
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var7
        i64.add
        local.tee $var13
        local.get $var6
        local.get $var9
        local.get $var13
        i64.xor
        i64.const 24
        i64.rotr
        local.tee $var23
        local.get $var3
        local.get $var1
        i32.load8_u offset=13
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var9
        local.get $var7
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var20
        i64.add
        local.tee $var6
        local.get $var23
        i64.xor
        i64.const 63
        i64.rotr
        local.set $var13
        local.get $var18
        local.get $var24
        local.get $var16
        local.get $var10
        local.get $var22
        i64.xor
        i64.const 63
        i64.rotr
        local.tee $var16
        local.get $var3
        local.get $var1
        i32.load8_u offset=14
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var7
        i64.xor
        i64.const 32
        i64.rotr
        local.tee $var18
        i64.add
        local.tee $var10
        local.get $var7
        local.get $var10
        local.get $var16
        i64.xor
        i64.const 24
        i64.rotr
        local.tee $var22
        local.get $var3
        local.get $var1
        i32.load8_u offset=15
        i32.const 3
        i32.shl
        i32.add
        i64.load
        i64.add
        i64.add
        local.tee $var16
        local.get $var18
        i64.xor
        i64.const 16
        i64.rotr
        local.tee $var18
        i64.add
        local.tee $var7
        local.get $var22
        i64.xor
        i64.const 63
        i64.rotr
        local.set $var10
        local.get $var4
        i32.const 16
        i32.add
        local.set $var4
        br $label1
      end
    end $label1
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load
    local.get $var6
    local.get $var14
    i64.xor
    i64.xor
    i64.store
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=8
    local.get $var7
    local.get $var15
    i64.xor
    i64.xor
    i64.store offset=8
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=16
    local.get $var9
    local.get $var19
    i64.xor
    i64.xor
    i64.store offset=16
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=24
    local.get $var8
    local.get $var16
    i64.xor
    i64.xor
    i64.store offset=24
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=32
    local.get $var10
    local.get $var17
    i64.xor
    i64.xor
    i64.store offset=32
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=40
    local.get $var11
    local.get $var20
    i64.xor
    i64.xor
    i64.store offset=40
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=48
    local.get $var12
    local.get $var18
    i64.xor
    i64.xor
    i64.store offset=48
    local.get $var2
    i32.load offset=4
    local.get $var2
    i32.load offset=4
    i64.load offset=56
    local.get $var13
    local.get $var21
    i64.xor
    i64.xor
    i64.store offset=56
    local.get $var0
    local.get $var14
    i64.store offset=24
    local.get $var0
    local.get $var15
    i64.store offset=32
    local.get $var0
    local.get $var9
    i64.store offset=40
    local.get $var0
    local.get $var16
    i64.store offset=48
    local.get $var0
    local.get $var10
    i64.store offset=56
    local.get $var0
    local.get $var11
    i64.store offset=64
    local.get $var0
    local.get $var12
    i64.store offset=72
    local.get $var0
    local.get $var13
    i64.store offset=80
    local.get $var0
    local.get $var6
    i64.store offset=88
    local.get $var0
    local.get $var7
    i64.store offset=96
    local.get $var0
    local.get $var19
    i64.store offset=104
    local.get $var0
    local.get $var8
    i64.store offset=112
    local.get $var0
    local.get $var17
    i64.store offset=120
    local.get $var0
    local.get $var20
    i64.store offset=128
    local.get $var0
    local.get $var18
    i64.store offset=136
    local.get $var0
    local.get $var21
    i64.store offset=144
  )
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
        local.get $var4
        local.get $var0
        i32.store offset=124
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
    i32.const 12
    i32.const 3
    call $__alloc
    i32.const 0
    i32.const 0
    call $func7
  )
  (func $func11
    i32.const 1696
    global.set $global0
    i32.const 1696
    global.set $global1
  )
  (data (i32.const 1025) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\0e\0a\04\08\09\0f\0d\06\01\0c\00\02\0b\07\05\03\0b\08\0c\00\05\02\0f\0d\0a\0e\03\06\07\01\09\04\07\09\03\01\0d\0c\0b\0e\02\06\05\0a\04\00\0f\08\09\00\05\07\02\04\0a\0f\0e\01\0b\0c\06\08\03\0d\02\0c\06\0a\00\0b\08\03\04\0d\07\05\0f\0e\01\09\0c\05\01\0f\0e\0d\04\0a\00\07\06\03\09\02\08\0b\0d\0b\07\0e\0c\01\03\09\05\00\0f\04\08\06\02\0a\06\0f\0e\09\0b\03\00\08\0c\02\0d\07\01\04\0a\05\0a\02\08\04\07\06\01\05\0f\0b\09\0e\03\0c\0d\00\00\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\0e\0a\04\08\09\0f\0d\06\01\0c\00\02\0b\07\05\03")
  (data (i32.const 1216) "\1a\00\00\00\01\00\00\00\01\00\00\00\1a\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00i\00n\00p\00u\00t")
  (data (i32.const 1264) "\22\00\00\00\01\00\00\00\01\00\00\00\22\00\00\00s\00r\00c\00/\00s\00o\00l\00v\00e\00r\00W\00a\00s\00m\00.\00t\00s")
  (data (i32.const 1328) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
  (data (i32.const 1376) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
  (data (i32.const 1440) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
  (data (i32.const 1504) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
  (data (i32.const 1568) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
  (data (i32.const 1632) "\06\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00a\00\00\00\02\00\00\00!\02\00\00\02\00\00\00$\02")
)