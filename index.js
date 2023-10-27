const spawn = require('cross-spawn')

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
// const webpackConfig = require('./webpack.base.config')

/**
 * getScripts 获取所有的script
 * @returns {*[]}
 */
const getScripts = () => {
    const scripts = []
    const scriptDir = path.resolve('./scripts')
    const filePaths = fs.readdirSync(scriptDir)

    filePaths.forEach((filePath) => {
        const { name, ext } = path.parse(filePath)
        if (ext === '.js') scripts.push(name)
    })
    return scripts
}

const getCommand = (cmds) => {
    const args = process.argv.slice(2)
    const scriptInd = args.findIndex((s) => cmds.includes(s))
    const cmd = scriptInd === -1 ? args.slice(0) : args[scriptInd]

    const nodeArgs = scriptInd > 0 ? args.slice(0, scriptInd) : []

    return {
        args, cmd, nodeArgs, scriptInd,
    }
}

const scripts = getScripts()
const {
    args, cmd, nodeArgs, scriptInd,
} = getCommand(scripts)

if (scripts.includes(cmd)) {
    const result = spawn.sync(
        process.execPath,
        nodeArgs
            .concat(require.resolve(`./scripts/${cmd}`))
            .concat(args.slice((scriptInd + 1))),
        { stdio: 'inherit' },
    )

    if (result.signal) process.exit(1)
    process.exit(result.status)
} else {
    console.error(`Unknow script: ${chalk.red(cmd)}.`)
    console.log(`Scripts of crw-script: ${chalk.green(scripts.join(' '))}.`)
}
