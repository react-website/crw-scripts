const HtmlWebpackPlugin = require('html-webpack-plugin')

// 获取html-webpack.config-plugin的options
const getHtmlWebpackPluginOptions = (productionEnv) => {
    const opts = {
        inject: true,
        template: '',
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
