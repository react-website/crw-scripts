/**
 * @name: getResolve
 * @description: 获取webpack扩展名及别名
 * @author: qq2575896094
 * @time: 2024/1/8
 */
const { join } = require('path')
const { appPath } = require('./project-path')

const joinPath = (folder) => join(appPath, folder)

module.exports = () => ({
    // 扩展名
    extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
    ],
    // 别名
    alias: {
        '@': appPath,
        '@pages': joinPath('pages'),
        '@components': joinPath('components'),
        '@fonts': joinPath('css/fonts'),
        '@framework': joinPath('framework'),
    },
})
