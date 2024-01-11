const path = require('path')

// webpack.config output
module.exports = (isProductionEnv, isDevelopmentEnv, distPath, appPath) => {
    const filename = isProductionEnv
        ? 'scripts/[name]-[contenthash:8].js'
        : isDevelopmentEnv && 'scripts/[name].bundle.js'
    const chunkFilename = isProductionEnv
        ? 'scripts/[name]-[contenthash:8].chunk.js'
        : isDevelopmentEnv && 'scripts/[name].chunk.js'

    return {
        path: distPath,
        pathinfo: isDevelopmentEnv,
        publicPath: isProductionEnv ? './' : '/',
        filename,
        chunkFilename,
        // assetModuleFileName: '',
        devtoolModuleFilenameTemplate: isProductionEnv
            ? (info) => path.relative(appPath, info.absoluteResourcePath).replace(/\\/g, '/')
            : isDevelopmentEnv && ((info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    }
}
