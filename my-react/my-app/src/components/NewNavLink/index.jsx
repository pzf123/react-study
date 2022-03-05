/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-12-11 15:20:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/App.js
 */
// 默认暴露和分别暴露
import React, {Component} from 'react'
// import {Link, Route} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class App extends Component{
  render() {
    return (
        <div>
          {/* 默认会给选中的加样式active的属性，可以通过传参改变 */}
          {/* 标签提内容是一个特殊的标签属性，可以通过this.props.children获取 */}
            <NavLink activeClassName="active" {...this.props}/> 
        </div>
    )
  }
}

export default App;
