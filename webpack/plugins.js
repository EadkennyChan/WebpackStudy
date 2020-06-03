const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new htmlWebpackPlugin({
    template: './src/index.html'
  })
]