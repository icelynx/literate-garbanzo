const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
        exclude: [
          /node_modules/,
          /dist/
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Untitled',
      template: path.join(__dirname, 'src', 'index.ejs')
    })
  ]
};