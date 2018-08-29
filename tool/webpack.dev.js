const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js')


const obj = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  optimization: {
    nodeEnv: 'development'
  },
  performance: {
    hints: false
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/'), //注意这里，相应看html的引用路径为如果写 /test/,那么引用就是 /test/+ 资源文件名
    // contentBase: path.resolve(__dirname, '../dist'), //copy插件就需要去掉这个
    contentBase: false,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    // noInfo: true,
    port: 8010,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = obj