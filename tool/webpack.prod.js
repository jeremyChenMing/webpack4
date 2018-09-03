const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const obj = merge(common, {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true
          }  
        }
      })
    ],
    splitChunks: {
      chunks: 'all', //默认all initial初始块 async 按需加载块
      minSize: 30000, //压缩前最小模块大小
      minChunks: 1, // 表示被引用次数
      maxAsyncRequests: 5, // 最大按需加载次数
      maxInitialRequests: 3, // 最大初始化加载次数
      // automaticNameDelimiter: '~',
      name: true, // 拆分出来的模块名称 true表示自动根据块和缓存组来命名
      cacheGroups: { //缓存组 --- 默认将node_modules中的模块拆分教vendors的代码块中，将至少引用两次的模块放进default中
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 缓存组的规则 
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20, //缓存的优先级
          reuseExistingChunk: true // 表示可以使用已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../') 
    }),
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       },
      "__dev__": JSON.stringify(true) 
    }),
  ]
})


// static 静态资源文件通过插件 copy-webpack-plugin 复制到指定目录，可以参考web-hybird

module.exports = obj