const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  entry: './src/main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './public/code'),
    filename: 'bundle.js',
    webassemblyModuleFilename: '[modulehash].wasm',
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/experimental',
      },
    ],
  },
}
