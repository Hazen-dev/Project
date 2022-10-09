'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const makeDir = require('make-dir');
const path = require('path');

// local settings
const mode = 'development'; // or production or development
const pageIndex = '00'; // index of page (main page is 00)

module.exports = (env) => {
  (async () => {
    if (env.pageIndex !== undefined) {
      const js = await makeDir('src/' + env.pageIndex + '/js');
      const sass = await makeDir('src/' + env.pageIndex + '/sass');
    }
    console.log(path);
    //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
  })();
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
      new MiniCssExtractPlugin(),
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: '../index.[contenthash].html',
        title: 'HazenDev',
        template: './index.html',
        path: './name',
        inject: 'body',
      }),
    ],
  };
};
