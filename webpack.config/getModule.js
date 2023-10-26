const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { appPath } = require('../conf/paths')

const getStyleLoader = (isProductionEnv, isDevelopmentEnv, cssOptions) => {
    const loaders = []
    if (isDevelopmentEnv) loaders.push({ loader: 'style-loader' })

    if (isProductionEnv) {
        loaders.push({
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: '../',
            },
        })
    }

    loaders.push({ loader: 'css-loader', options: cssOptions })
    loaders.push({
        loader: 'postcss-loader',
        postcssOptions: {
            plugins: [
                'postcss-preset-env', {
                    stage: 3,
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                },
            ],
        },
    })

    return loaders
}

module.exports = (isProductionEnv, isDevelopmentEnv) => ({
    parser: {
        javascript: {
            dynamicImportMode: 'lazy', // 'eager' | 'weak' | 'lazy' | 'lazy-once'
        },
    },
    rules: [
        {
            test: /\.css$/,
            include: appPath,
            exclude: /node_module/,
            use: getStyleLoader(isProductionEnv, isDevelopmentEnv, {
                importLoaders: 1,
                sourceMap: isProductionEnv,
                modules: {
                    mode: 'icss',
                },
            }),
        },
    ],
})
