'use strict';

/* globals process __dirname */

const webpack           = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env['NODE_ENV'] === 'production',
      NODE_MODULES = /\bnode_modules\b/;

const config = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: isProduction ? 'dist/bundle-[hash].js' : 'dist/bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: NODE_MODULES, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: require.resolve('react'), loader: 'expose?React' },
      { test: /\.jsx?$/, exclude: NODE_MODULES, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.(jpg|gif)$/, loader: "file" },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'fabiob'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: `dist/vendor${isProduction ? '-[hash]' : ''}.js`,
      minChunks: m => m.resource && NODE_MODULES.test(m.resource)
    })
  ]
};

if (isProduction) {
  config.plugins.unshift(new webpack.optimize.DedupePlugin());
  config.plugins.unshift(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = config;
