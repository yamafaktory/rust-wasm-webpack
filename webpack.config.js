const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    open: true,
    openPage: 'index.html',
    port: 9000,
  },
  entry: './src/main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './public/code'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: [{
          loader: 'wasm-loader',
        },{
          loader: 'rust-native-wasm-loader',
          options: {
            gc: true,
            release: true
          },
        }],
      },
    ],
  },
}
