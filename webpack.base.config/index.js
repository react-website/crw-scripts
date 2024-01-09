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
const { rootPath } = require('./project-path')

dotenv.config({ path: path.resolve(rootPath, '.env') })

module.exports = (webpackEnv) => {
    const isProductionEnv = webpackEnv === 'production'
    const isDevelopmentEnv = webpackEnv === 'development'

    // webpack模式, 开发环境or生产环境
    const mode = isProductionEnv ? 'production' : isDevelopmentEnv && 'development'

    const devtool = isProductionEnv ? false : 'cheap-module-source-map'

    return {
        mode,
        // 在第一个错误出现时抛出失败结果，而不是容忍它。
        bail: isProductionEnv,
        // 只在发生错误或有警告时输出
        stats: 'errors-warnings',
        entry: getEntry(),
        output: getOutput(isProductionEnv, isDevelopmentEnv),
        devtool,
        resolve: getResolve(),
        module: getModule(isProductionEnv, isDevelopmentEnv),
        plugins: getPlugins(isProductionEnv),
        optimization: getOptimization(isProductionEnv),
    }
}
