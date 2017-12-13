import('../src/lib.rs').then(wasm => {
  console.log(wasm.default.add_one(22))
})
