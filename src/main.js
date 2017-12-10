import('../wasm/clean.wasm').then(wasm => {
  console.log(wasm.default.add_one(22))
})
