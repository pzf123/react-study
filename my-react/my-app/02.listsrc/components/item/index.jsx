/*
 * @Author: your name
 * @Date: 2021-11-21 19:26:05
 * @LastEditTime: 2021-11-21 21:53:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/item/index.js
 */
import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state = {mouse: false}
    render() {
        let {itemData} = this.props 
        return (
            <div className="show-wrap" style={{background: this.state.mouse ? '#eee' : 'none'}}
                 onMouseEnter={this.handleMove(true)} onMouseLeave={this.handleMove(false)}>
                <span className="show-content">
                    <input checked={itemData.done} type="checkbox" onChange={this.checkChange(itemData.id)}/>
                    {itemData.value}
                </span>
                <button style={{display: this.state.mouse ? 'block' : 'none'}} className="delete-btn" 
                    onClick={() => {this.props.deleteItem(itemData.id)} }>删除</button>
            </div>
        )
    }
    deleteItem = () => {
        console.log('item')
        
    }
    //取消勾选
    checkChange = (id)=>{
        return (event) => {
            console.log(id, event.target.checked)
            this.props.changeItem(id, event.target.checked)
        }
        

    }
    deleteData = (id) => {
        return (event) => {
            this.props.deleteItem(id)
        }
    }

    handleMove = (val) => {
        return () => { 
            this.setState({
                mouse: val
            })
        }
        
    }
}
