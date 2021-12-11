/*
 * @Author: your name
 * @Date: 2021-11-21 19:10:23
 * @LastEditTime: 2021-11-21 21:33:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/list/search/index.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
export default class index extends Component {
    // 对接收的props进行类型必要性的限制
    static propTypes = {
        list: PropTypes.array.isRequired,
        addItem: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="search-wrap">
                <input onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        console.log(event.target.value)
        let value = event.target.value
        // 将值传给父组件
        this.props.addItem(value)
        //  清空input框

    }
}

