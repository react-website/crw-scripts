const fs = require('fs')
const path = require('path')

const rootPath = fs.realpathSync(process.cwd())

console.log('rootPath', rootPath)

const extensions = [
    'js',
    'jsx',
    'ts',
    'tsx',
]

const resolveApp = (relativePath) => path.resolve(rootPath, relativePath)

// 获取模块路径
const resolveModule = (resolveFn, filePath) => {
    const extension = extensions.find((ext) => fs.existsSync(`${filePath}.${ext}`))

    if (extension) return resolveFn(`${filePath}.${extension}`)
    return resolveFn(`${filePath}.js`)
}

module.exports = {
    // entry path of webpack.base.config
    entry: resolveModule(resolveApp, 'src/index'),
    // index.html path
    appHtml: resolveApp('src/index.html'),
    rootPath: resolveApp('.'),
    appPath: resolveApp('src'),
    // dist path
    distPath: resolveApp('dist'),
}
