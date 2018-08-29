const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';



module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'), //path.resolve(__dirname, '../dist')
    // app: ['webpack-hot-middleware/client', './src/index.js'], //webpack-hot-middleware/client
    // app: ['webpack/hot/dev-server','./src/index.js'], //webpack-hot-dev-server/client
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            // optiops: {}
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
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:3]'
          }
        }, {
          loader: 'less-loader',
          // exclude: /node_modules\/antd/,
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack4',
      template: path.resolve(__dirname, '../index.html') 
    }),
    new webpack.DefinePlugin({
      "__dev__": JSON.stringify(isPro) 
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        // ignore: prod ? ['dll.js','echarts.simple.min.js'] : ['.*']
      }
    ])
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".less"],
  },

};