/*
 * @Author: your name
 * @Date: 2022-03-05 16:28:08
 * @LastEditTime: 2022-03-12 19:35:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

 
module.exports = {
    mode: "development",
    entry: "./src/main",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    resolve: {
        // 自动填充后拽, 这里会覆盖后拽，所以要配置里面用到的后拽
        extensions: [".ts", ".js", ".json", ".ico", ".jpg"]
    },
    
    // 配置一些端口号等信息
    devServer: {},
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                // 图片加载器
                test:/\.(jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./01.html"
        })
    ]

}