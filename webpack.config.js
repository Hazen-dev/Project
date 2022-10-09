'use strict';
const ESLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var dotenv = require('dotenv');

// local settings
const mode = 'development'; // or production or development
const pageIndex = '00'; // index of page (main page is 00)

module.exports = (env) => {
  return {
    entry: './src/' + pageIndex + '/js/app.js',
    context: path.resolve(__dirname),
    output: {
      path: path.resolve(__dirname, 'dist/' + pageIndex + '/js'),
      filename: 'bundle.js',
      publicPath: '/dist/' + pageIndex + '/js/',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    mode: mode,
    resolve: {},
    devtool: 'source-map',
    plugins: [
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
    ],
  };
};
