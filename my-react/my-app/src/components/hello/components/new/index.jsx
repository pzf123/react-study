/*
 * @Author: your name
 * @Date: 2021-11-21 18:34:49
 * @LastEditTime: 2021-12-12 15:13:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/welcome/welcom.js
 */
import React, {Component} from "react";   
import qr from 'querystring'
export default class Welcome extends Component {
    state = {
        newObj: {
            new1: 'new1',
            new2: 'new2dsfdsfdf',
            new3: 'new3dfdsfewrewr',
            new4: 'new4dfsdfewrwe', 
        },
        msgArr: [
            {label: 'new1', value: 'new1'},
            {label: 'new2', value: 'new2'},
            {label: 'new3', value: 'new3'},
            {label: 'new4', value: 'new4'},
        ]
    }
    pushShow = () => {
        let item = this.state.msgArr[1]
        this.props.history.push(`/hello/new/${item.label}/${item.value}?value=${item.value}`)
    }

    replaceShow = () => {
        let item = this.state.msgArr[1]
        this.props.history.replace(`/hello/new/${item.label}/${item.value}?value=${item.value}`)
    }

    render () { 
        // const {value} = this.props.match.params 
        // 转search 参数
        // const {search} = this.props.location
        // const {value} = qr.parse(search.split('?')[1])
        // state参数
        let  obj  = this.props.location.state && this.props.location.state
        let value = obj && obj.value

        // 将对象转化为key=value&key=value的格式  urlencoded
        console.log(value)
        return (
            <div className="welcome-wrap">
                方法{this.state.newObj[value]}
                <button onClick={this.pushShow}>push查看</button>
                <button onClick={this.replaceShow}>replace查看</button>
            </div>
        )
    }
}