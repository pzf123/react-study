/*
 * @Author: your name
 * @Date: 2021-11-21 18:28:04
 * @LastEditTime: 2021-11-21 21:10:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/hello.js
 */
import React, {Component} from "react";
import './index.css';
import Item from '../item'
export default class Hello extends Component{ 
    render () {
        let {list, changeItem, deleteItem} = this.props 
        return(
            <div className="my-list">
                <div>
                    {list.map(item => {
                        return (
                            <Item itemData={item} key={item.id} changeItem={changeItem} deleteItem={deleteItem} />
                        )
                    })} 
                </div>
            </div>
        )
    }
}