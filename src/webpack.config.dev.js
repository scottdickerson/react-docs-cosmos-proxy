const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.js');


module.exports = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, '..', 'tests', 'unit', 'helpers', 'react-warnings.js')
  ],

  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin()
  ]
});
