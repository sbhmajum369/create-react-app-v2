const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
require("regenerator-runtime");       // Import it in all the files using async/await


module.exports = merge(config, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    hot: true
  },

});
