/**
 * @name: getOptimization
 * @description: webpack optimization 优化
 * @author: qq2575896094
 * @time: 2024/1/9
 */
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = (isProductionEnv) => ({
    minimize: isProductionEnv,
    minimizer: [
        new TerserWebpackPlugin({
            parallel: true,
            terserOptions: {
                parse: { ecma: 8 },
                compress: {
                    ecma: 5,
                    warnings: false,
                    comparisons: false,
                    inline: 2,
                    pure_funcs: ['console.log'],
                },
                mangle: { safari10: true },
                output: {
                    ecma: 5,
                    comments: false,
                    ascii_only: true,
                },
            },
        }),
        new CssMinimizerWebpackPlugin(),
    ],
})
