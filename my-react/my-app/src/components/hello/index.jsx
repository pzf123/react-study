/*
 * @Author: your name
 * @Date: 2021-11-21 18:28:04
 * @LastEditTime: 2021-11-21 18:51:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/hello.js
 */
import React, {Component} from "react";
import './index.css';
import hello from './index.module.css'
export default class Hello extends Component{
    render () {
        return(
            <div className="my-hello">hello world !!! <span className={hello.title}>module Style</span></div>
        )
    }
}