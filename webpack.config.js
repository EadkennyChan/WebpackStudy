const plugins = require('./webpack/plugins')
const rules = require('./webpack/rules')

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/index.js'
  },
  module: {
    rules
  },
  plugins
}