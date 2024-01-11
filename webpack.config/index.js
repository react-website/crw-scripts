/**
 * @name: index
 * @description: 获取webpack配置
 * @author: qq2575896094
 * @time: 2024/1/8
 */

const dotenv = require('dotenv')
const path = require('path')
const getEntry = require('./getEntry')
const getOutput = require('./getOutput')
const getResolve = require('./getResolve')
const getModule = require('./getModule')
const getPlugins = require('./getPlugins')
const getOptimization = require('./getOptimization')
const { getProjectConf } = require('../crw-utils')
const getDevServer = require('./getDevServer')

// 获取project.config.js文件下配置文件
const {
    rootPath,
    entryPath,
    distPath,
    appPath,
    appHtml,
    ...projectConf
} = getProjectConf()

// 获取.env配置文件
dotenv.config({ path: path.resolve(rootPath, '.env') })

module.exports = (webpackEnv) => {
    const isProductionEnv = webpackEnv === 'production'
    const isDevelopmentEnv = webpackEnv === 'development'

    // webpack模式, 开发环境or生产环境
    const mode = isProductionEnv ? 'production' : isDevelopmentEnv && 'development'

    const devtool = isProductionEnv ? false : 'cheap-module-source-map'

    const devServerConf = getDevServer(distPath, projectConf)

    const webpackBaseConf = {
        mode,
        // 在第一个错误出现时抛出失败结果，而不是容忍它。
        bail: isProductionEnv,
        // 只在发生错误或有警告时输出
        stats: 'errors-warnings',
        entry: getEntry(entryPath),
        output: getOutput(isProductionEnv, isDevelopmentEnv, distPath, appPath),
        devtool,
        resolve: getResolve(projectConf),
        module: getModule(isProductionEnv, isDevelopmentEnv, appPath),
        plugins: getPlugins(isProductionEnv, appPath, appHtml),
        optimization: getOptimization(isProductionEnv),
    }

    return {
        webpackBaseConf,
        devServerConf,
    }
}
