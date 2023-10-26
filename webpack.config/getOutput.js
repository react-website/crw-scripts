const path = require('path')
const { distPath, appPath } = require('../conf/paths')

// webpack.config output
module.exports = (isProductionEnv, isDevelopmentEnv) => ({
    path: distPath,
    pathinfo: isDevelopmentEnv,
    publicPath: isProductionEnv ? './' : '/',
    filename: isProductionEnv
        ? 'scripts/[name]-[contenthash:8].js'
        : isDevelopmentEnv && 'scripts/[name].js',
    chunkFileName: isProductionEnv
        ? 'scripts/[name]-[contenthash:8].chunk.js'
        : isDevelopmentEnv && 'scripts/[name].chunk.js',
    // assetModuleFileName: '',
    devtoolModuleFilenameTemplate: isProductionEnv
        ? (info) => path.relative(appPath, info.absoluteResourcePath).replace(/\\/g, '/')
        : isDevelopmentEnv && ((info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
})
