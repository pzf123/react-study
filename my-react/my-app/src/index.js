/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:27
 * @LastEditTime: 2021-12-12 15:15:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-react/my-app/src/index.js
 */
// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, BrowserRouter} from 'react-router-dom'
// state的参数传在history里，所以如果用HashRouter，state会丢失
// BrowserRouter有兼容性问题

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
