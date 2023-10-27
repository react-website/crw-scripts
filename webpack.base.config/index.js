const paths = require('../conf/paths')
const getOutput = require('./getOutput')
const resolve = require('./getResolve')
const getModule = require('./getModule')
const getPlugins = require('./getPlugins')

module.exports = (webpackEnv) => {
    const isProductionEnv = webpackEnv === 'production'
    const isDevelopmentEnv = webpackEnv === 'development'

    return {
        // webpack模式, 开发环境or生产环境
        mode: isProductionEnv ? 'production' : isDevelopmentEnv && 'development',
        // 在第一个错误出现时抛出失败结果，而不是容忍它。
        bail: isProductionEnv,
        // 只在发生错误或有警告时输出
        stats: 'errors-warnings',
        entry: paths.entry,
        output: getOutput(isProductionEnv, isDevelopmentEnv),
        devtool: isProductionEnv ? false : 'cheap-module-source-map',
        resolve,
        module: getModule(isProductionEnv, isDevelopmentEnv),
        plugins: getPlugins(),
    }
}
