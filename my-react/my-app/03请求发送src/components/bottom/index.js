/*
 * @Author: your name
 * @Date: 2021-11-22 23:16:21
 * @LastEditTime: 2021-11-23 22:45:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/bottom/index.js
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state={
        tip: '你好'
    }
    render() { 
        return (
            <div>
                {this.state.tip}
            </div>
        )
    }
    componentDidMount() {
        PubSub.subscribe('mynews',(msg, data) => {
            console.log(msg, data)
            this.setState({
                tip: data
            })
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe('mynews')
    }
}
