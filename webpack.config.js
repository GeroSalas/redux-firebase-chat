const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: ['./src/index.js'],

  devtool: 'cheap-module-eval-source-map',

  output: {
    filename: 'bundle.min.js',
    path: './public',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true
  },

  plugins: [
    //new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]

}
