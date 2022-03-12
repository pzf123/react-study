import { InformationEvent } from "http"

/*
 * @Author: your name
 * @Date: 2022-03-06 15:33:19
 * @LastEditTime: 2022-03-06 16:31:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/01_变量的定义.ts
 */
var name: string = 'name'
let age: number = 12
let foo = 'dd'
const height: number = 1.88
let flag:boolean = true
// string: Typescript中的字符串类型
// String: Javascript中字符串的包装类

// eslint tslint


// 数组类型
// 数组的数据类型应该要确定， anotation

// 第一种写法
const names1: Array<string> = [] // 不推荐（react.jsx中有冲突<div></div>）
names1.push('122')
// 第二种写法
const names2: string[] = []
names1.push('ddd')

// 对象类型, 类型推断
const info = {
    name: '2',
    age: 12
}
// null和undefined类型
let n1:null = null
let n2:undefined = undefined

// symbol类型'
const title1 = Symbol('title')
const title2 = Symbol('title')
const info2 = {
    [title1]: 'limiy',
    [title2]: 'dddd'
}
export {name}

