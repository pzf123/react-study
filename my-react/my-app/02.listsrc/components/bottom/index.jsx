 
import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() { 
        const {list} = this.props 
        const finshCount = list.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        return (
            <div className="bottom-wrap">
                <div className="bottom-left">
                    <input type="checkbox" checked={list.length === finshCount} onChange={this.changeAll}/>
                    已完成 {finshCount}
                    <span className="tip-splice">/</span>
                    <span>
                        全部{list.length}
                    </span>
                </div>
                
                <button className="delete-btn"  onClick={() => {
                    this.props.checkAllDoneList(false)
                }}>清除已完成任务</button>
            </div>
        )
    }
    changeAll = (event) => {
        this.props.checkAllDoneList(event.target.checked)
    }
}
