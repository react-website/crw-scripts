const HtmlWebpackPlugin = require('html-webpack-plugin')
const { appHtml } = require('../conf/paths')
// 获取html-webpack.base.config-plugin的options
const getHtmlWebpackPluginOptions = (productionEnv) => {
    const opts = {
        inject: true,
        template: appHtml,
    }

    if (productionEnv) {
        return {
            ...opts,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }
    }
    return opts
}

module.exports = () => [
    new HtmlWebpackPlugin(getHtmlWebpackPluginOptions()),
]
