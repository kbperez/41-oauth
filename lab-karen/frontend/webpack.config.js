'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-maps',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlPlugin({template: `${__dirname}/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css')
  ],
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader'], ['sass-loader']),
      },
    ]
  },
};
