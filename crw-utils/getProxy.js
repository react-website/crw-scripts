/**
 * @name: getProxy
 * @description: 获取webpack-dev-server proxy
 * @author: qq2575896094
 * @time: 2023/10/27
 */

module.exports = () => {
    console.log('proxy')
    // TODO: 获取网络代理
    return {
        '/user': 'http://localhost:8088',
    }
}
