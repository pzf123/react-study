/*
 * @Author: your name
 * @Date: 2021-11-21 19:26:05
 * @LastEditTime: 2021-11-22 23:27:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/item/index.js
 */
import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class Item extends Component {
    state = {mouse: false}
    render() {
        let {itemData} = this.props 
        return (
            <div className="show-wrap"> 
                    <img className="img-src" src={itemData.avatar_url} alt=""  onClick={() => this.drowPath(itemData.html_url)}/>  
                    <p>{itemData.login} </p>
                    <button onClick={() => this.publicNews(itemData.login)}>发布消息</button>
            </div>
        )
    }
    drowPath = (url) => { 
        window.open(url)
        
    } 
    publicNews = (val) => {
        console.log(PubSub)
        PubSub.publish('mynews', val)
    }
}
