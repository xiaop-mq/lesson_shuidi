const path = require('path')
const nodeExternals = require('webpack-node-externals');// 加载外部CDN资源
const merge = require('webpack-merge'); // 合并两个文件
const config = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)