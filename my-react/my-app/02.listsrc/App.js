/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-11-21 21:58:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/App.js
 */
// 默认暴露和分别暴露
import React, {Component} from 'react'
import './App.css'
// 子组件
// 引入的是文件夹时，如果子文件是index的可以省略
import Search from './components/search'
import List from './components/list'
import Bottom from './components/bottom'
import {nanoid} from 'nanoid'

class App extends Component{
  state = {
    // 状态在哪里，操作状态的方法就在哪里
      list: [
          {value: '第一项', id: 1, done: true},
          {value: '第二项', id: 2, done: false},
          {value: '第三项', id: 3, done: false}
      ]
  }
  render() {
    let {list} = this.state
    return (
        <div className="app-wrap">
          <Search addItem={this.addItem} list={list} />
          <List list={list} changeItem={this.changeItem} deleteItem={this.deleteItem} />
          <Bottom  list={list} checkAllDoneList={this.checkAllDoneList} />
        </div>
    )
  }
  // 删除元素
  deleteItem = (id) => {
    if (window.confirm('确认删除么')) {
      const {list} = this.state
      let newList = list.filter(item =>{
        return item.id !== id
      })
      this.setState({
        list: newList
      })
    } 
    
  }
  // 推入元素
  addItem = (val) => {
    const item = {
      id: nanoid(),
      value: val,
      done: false
    } 
    let list = [item, ...this.state.list]
    this.setState({
      list
    })
  }
  // 勾选和取消勾选
  changeItem = (id, done) => {
    const {list} = this.state
    const newList = list.map(item => {
      if (item.id === id) {
        return {...item, done}
      } else {
        return item
      }
    })
    this.setState({
      list: newList
    })
  }
  checkAllDoneList =(flag) => {
    const {list} = this.state
    list.forEach(item => {
      item.done = flag
    })
    this.setState({
      list
    })
  }
}

export default App;
