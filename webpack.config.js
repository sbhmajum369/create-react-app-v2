// Names are very crucial: {mode, title}
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry : {
    index: './src/index.js',
    app: './src/App.js'
  },

  plugins : [
    new HtmlWebpackPlugin ({
      title: 'Progressive Web Application',
      template : 'public/index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5*1024*1024
    }),
  ],

  output : {
    path : path.resolve(__dirname , 'build'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: 'auto'
  },

  module : {
    rules : [
      {
        test: /\.(js)$/,
        resolve: {
          extensions: [ '.ts', '.js', '.tsx', '.jsx'],
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },

  stats: 'minimal',

}
