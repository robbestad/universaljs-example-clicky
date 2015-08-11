'use strict';

var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
  module: {
    preLoaders: [
      { test: /\.js$/, loaders: ['universal-jsx-loader'], exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  entry: [path.join(__dirname,'index.js')],
  output: {
      filename: path.join(__dirname, 'bundle.js')
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js']
  }
};
