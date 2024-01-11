/**
 * @name: getProjectConf
 * @description: 获取工程的配置文件
 * @author: qq2575896094
 * @time: 2023/10/27
 */
const { resolve } = require('path')
const path = require('path')
const fs = require('fs-extra')

module.exports = (rootPath) => {
    let projectConf = {
        port: 8090,
        proxy: {},
        alias: {},
    }
    const configPath = path.resolve(rootPath, 'crw.config.js')
    if (fs.pathExistsSync(configPath)) {
        const conf = require(configPath)
        projectConf = {
            ...projectConf,
            ...conf,
        }
    }

    const { PORT } = process.env
    if (PORT) projectConf.port = parseInt(PORT, 10)

    return projectConf
}
