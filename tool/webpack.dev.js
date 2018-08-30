const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js')


const obj = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      cacheGroups: {
          vendor:{//node_modules内的依赖库
              chunks:"all",
              test: /[\\/]node_modules[\\/]/,
              name:"vendor",
              minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
              maxInitialRequests: 5,
              minSize: 0,
              priority:10,
              // enforce: true?
          },
          common: {// ‘src/js’ 下的js文件
              chunks:"all",
              test:/[\\/]src[\\/]/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,  
              // test: /src\/components\/|src\/routes\//,  
              // test: /[\\/]src[\\/]js[\\/].*\.js/,  
              name: "common", //生成文件名，依据output规则
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority:11
          }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
    
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
    port: 8010,
    compress: true,
    // noInfo: true,
    // info: true,
    stats: {
      assets: true,
      builtAt: true,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      hash: false,
      colors: true,
      modules: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: false,
    },

    proxy: {
      '/api': {
        "target": "http://bricks.upvi.com/api/",
        "changeOrigin": true,
        "pathRewrite": { "^/api/" : "" }
      }
    }


  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = obj