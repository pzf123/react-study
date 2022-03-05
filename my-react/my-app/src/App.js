/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-12-12 15:09:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/App.js
 */
// 默认暴露和分别暴露
import React, {Component} from 'react'
// import {Link, Route} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router-dom'
// 子组件
// 引入的是文件夹时，如果子文件是index的可以省略
import Hello from './components/hello'

import Welcome from './components/welcome'
import Header from './components/header'
import NewNavLink from './components/NewNavLink'
import './App.css'

class App extends Component{
  
  render() {
    return (
        <div>
          <Header />
          {/* 默认会给选中的加样式active的属性，可以通过传参改变 */}
          {/* 路由跳转是push模式，可以设置replace来设为replace模式,replace没有缓存 */}
          {/*  <NewNavLink replace={true} to="/hello">hello</NewNavLink> */}
            <NewNavLink to="/hello">hello</NewNavLink> <br />
            <NewNavLink to="/welcome">welcome</NewNavLink>
            <div>
              <Switch>
                <Route path="/hello" component={Hello} />
                {/* exact严格匹配会导致不能二级路由， 所以不能加exact */}
                <Route path="/welcome" component={Welcome} /> 
                <Redirect to="/hello" />
              </Switch>
            </div> 
          {/* <Hello />
          <Welcome /> */}
        </div>
    )
  }
}

export default App;
