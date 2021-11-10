const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');
      
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader',]
        },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
};