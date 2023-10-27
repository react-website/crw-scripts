/**
 * @name: getDevServer
 * @description: webpack-dev-server proxy
 * @author: qq2575896094
 * @time: 2023/10/27
 */
const ip = require('ip')
const { distPath } = require('../conf/paths')
const { getProxy } = require('../crw-utils')

module.exports = () => {
    const proxy = getProxy()

    return {
        devServer: {
            ip: ip.address(),
            port: 8899,
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
        },
    }
}
