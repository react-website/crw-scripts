/**
 * @name: start
 * @description: crw-script的start脚本
 * @author: qq2575896094
 * @time: 2023/10/27
 */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const WebpackDevServer = require('webpack-dev-server')
const getWebpackBaseConfig = require('../webpack.base.config')
const getDevServer = require('../webpack.base.config/getDevServer')
const { createCompiler } = require('../crw-utils')

const webpackBaseConf = getWebpackBaseConfig('development')
console.log(webpackBaseConf)

const devServer = new WebpackDevServer(getDevServer(), createCompiler(webpack, webpackBaseConf))

devServer.start()
