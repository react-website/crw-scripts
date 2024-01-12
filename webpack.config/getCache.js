/**
 * @name: getCache
 * @description: webpack cache
 * @author: qq2575896094
 * @time: 2024/1/12
 */

module.exports = () => ({
    type: 'filesystem',
    version: '',
    cacheDirectory: '',
    buildDependencies: {
        defaultWebpack: ['webpack/lib/'],
        config: [__filename],

    },
    store: 'pack',
})
