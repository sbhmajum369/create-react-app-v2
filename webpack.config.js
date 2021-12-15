// Names are very crucial: {mode, title}

module.exports = {
  entry : {
    index: './src/index.js'
  },

  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
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
