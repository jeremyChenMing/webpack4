const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: false, //  显示无信息到控制台（仅警告和错误
  historyApiFallback: true,
  stats: {
    colors: true,
  } 
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(path.join(__dirname, 'public')));
// Serve the files on port 3000.
app.listen(6000, function () {
  console.log('Example app listening on port 6000!\n');
});