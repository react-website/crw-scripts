/**
 * @name: getProxy
 * @description: 获取webpack-dev-server proxy
 * @author: qq2575896094
 * @time: 2023/10/27
 */
const { resolve } = require('path')

module.exports = (rootPath) => {
    const devServerConf = {
        port: 8090,
        proxy: {},
    }

    const { PORT } = process.env
    if (PORT) devServerConf.port = parseInt(PORT, 10)

    const proxyPath = resolve(rootPath, 'project-dev-proxy.js')
    devServerConf.proxy = require(proxyPath)()

    return devServerConf
}
