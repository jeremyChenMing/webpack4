
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    app: './src/index.js',
    // app: ['webpack-hot-middleware/client', './src/index.js'], //webpack-hot-middleware/client
    // app: ['webpack/hot/dev-server','./src/index.js'], //webpack-hot-dev-server/client
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
          options: {}
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:3]'
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              require('autoprefixer')({
                "browsers": [
                  "defaults",
                  "not ie < 11",
                  "last 2 versions",
                  "> 1%",
                  "iOS 7",
                  "last 3 iOS versions"
                ]
              })
            ]
          }
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack4',
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"development"'
      },
      "__dev__": JSON.stringify(isPro) 
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", "less"],
  },

  devServer: {
    publicPath: '/', //注意这里，相应看html的引用路径为如果写 /test/,那么引用就是 /test/+ 资源文件名
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    // noInfo: true,
    port: 8010,
    compress: true
  }

};