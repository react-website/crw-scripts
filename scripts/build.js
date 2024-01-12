const webpack = require('webpack')
const getWebpackConfig = require('../webpack.config')

const { webpackBaseConf } = getWebpackConfig('production')

webpack(webpackBaseConf).run((err, stats) => {
    console.error(err, stats)
})
