/*
 * @Author: your name
 * @Date: 2021-11-21 18:34:49
 * @LastEditTime: 2021-12-12 15:03:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/components/welcome/welcom.js
 */
import React, {Component} from "react"; 
import New from './components/new/index'
import {Redirect, Route, Switch, NavLink} from 'react-router-dom'
export default class Welcome extends Component {
    state = {
        msgArr: [
            {label: 'new1', value: 'new1'},
            {label: 'new2', value: 'new2'},
            {label: 'new3', value: 'new3'},
            {label: 'new4', value: 'new4'},
        ]
    }
    render () {
        const {msgArr} = this.state
        return (
            <div className="welcome-wrap">
                {
                    msgArr.map(item => {
                        return (
                            <div key={item.value}>
                                {/* <NavLink to={`/hello/new?value=${item.value}`} >params{item.label}</NavLink> */}
                                {/* 刷新state也不会消失 */}
                                <NavLink to={{
                                    pathname: `/hello/new/${item.label}/${item.value}`, 
                                    state: {value: item.value}
                                }} >params{item.label}</NavLink>
                            </div>
                        )
                    })
                }
                <div>
                <Switch>
                    {/* 传参params参数/:label/:value */}
                    {/* 传search参数， 无需声明参数 */}
                    <Route path="/hello/new/:label/:value" component={New} />
                    {/* <Route path="/hello/new" component={New} /> */}
                    <Redirect to="/hello" />
                </Switch>
            </div> 
            </div>
        )
    }
}