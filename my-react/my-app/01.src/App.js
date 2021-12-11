/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-11-21 18:47:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/App.js
 */
// 默认暴露和分别暴露
import React, {Component} from 'react'
// 子组件
// 引入的是文件夹时，如果子文件是index的可以省略
import Hello from './components/hello'
import Welcome from './components/welcome'

class App extends Component{
  render() {
    return (
        <div>
          <Hello />
          <Welcome />
        </div>
    )
  }
}

export default App;
