/*
 * @Author: your name
 * @Date: 2021-11-21 18:34:49
 * @LastEditTime: 2021-12-12 15:10:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="welcome-wrap">header</div>
        )
    }
}
// withRouter将一般组件具有路由组件的属性
export default withRouter(Header)