/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-11-23 22:37:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/App.js
 */
// 默认暴露和分别暴露
import React, {Component} from 'react'
import axios from 'axios'
// 子组件
// 引入的是文件夹时，如果子文件是index的可以省略
import Search from './components/search'
import List from './components/list' 
import Bottom from './components/bottom' 
// import {nanoid} from 'nanoid'

class App extends Component{
  state = {
    list: []
  }
  getStudentData = async () => {
    axios.get('/api1/search/users2').then(res =>{
        this.setState({
          list: res.data.items,
          
        })
    }) 
    fetch('/api1/search/users2').then(res =>{ 
      console.log(res)
      return res.json()
    }) .then(res => {
      console.log(res)
    })
    try {
      const response = await fetch('/api1/search/users2')
      const data = await response.json()
      console.log(data)
    } catch {
      console.log('err')
    } 

  }
  getData = (value) => {
    console.log(value)
    axios.get(`/api1/search/users?q=${value}`).then(res =>{
        console.log(res)
        this.setState({
          list: res.data.items
        })
    })  
  }
  componentDidMount() {
     this.getStudentData()
  }
  render() {
    return (
        <div className="app-wrap"> 
           <Search  getData={this.getData} />
           {this.state.list.length ? <List list = {this.state.list}/> : '加载中'}
           <Bottom />
        </div>
    )
  }
}

export default App;
