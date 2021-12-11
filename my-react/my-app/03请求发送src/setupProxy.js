/*
 * @Author: your name
 * @Date: 2021-11-22 21:21:34
 * @LastEditTime: 2021-11-22 21:35:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/setupProxy.js
 */

// 引入中间件, 初始化脚手架自带的
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    // 可以配置多个代理
    app.use(
        proxy('/api1', { // 匹配/api1开头的请求
            target: 'http://localhost:5000', // 请求转发给谁
            changeOrigin: true, // 控制服务器收到的请求头中的HOST字段的值，欺骗服务器，让服务器以为请求是本身发出的
            pathRewrite: {'^/api1': ''} // 将api重定向
        }),
    ),
    app.use(
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        }),
    )
}

