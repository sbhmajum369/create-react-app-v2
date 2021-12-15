const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.js');
require("regenerator-runtime");       // Import it in all the files using async/await


module.exports = merge(dev, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    static: './build'
  },

});
