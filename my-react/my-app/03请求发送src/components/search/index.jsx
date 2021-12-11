/*
 * @Author: your name
 * @Date: 2021-11-21 19:10:23
 * @LastEditTime: 2021-11-22 22:45:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/list/search/index.js
 */
import React, { Component } from 'react'

import './index.css'
export default class index extends Component { 
    render() {
        return (
            <div className="search-wrap">
                <input onKeyUp={this.handleKeyUp} ref={c => this.keyWordElement = c} placeholder="请输入你的任务名称，按回车键确认" />
                <button onClick={this.search}>点击</button>
            </div>
        )
    }
    search = () => { 
        // 连续解构赋值
        const  {keyWordElement: {value: keyword}} = this 
        this.props.getData(keyword)

    }
    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        console.log(event.target.value) 
        this.props.getData()

    }
}

