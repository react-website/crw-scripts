/**
 * @name: getDevServer
 * @description: webpack-dev-server proxy
 * @author: qq2575896094
 * @time: 2023/10/27
 */
const ip = require('ip')
const { rootPath, distPath } = require('./project-path')
const getDevServerConf = require('../crw-utils/getDevServerConf')

const { port, proxy = {} } = getDevServerConf(rootPath)

module.exports = () => ({
    host: ip.address(),
    port,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    },
    open: true,
    hot: true,
    static: {
        directory: distPath,
    },
    historyApiFallback: true,
    compress: true,
    proxy,
})
