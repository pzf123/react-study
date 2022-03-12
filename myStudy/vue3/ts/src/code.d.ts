/*
 * @Author: your name
 * @Date: 2022-03-12 17:30:43
 * @LastEditTime: 2022-03-12 19:39:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/code.d.ts
 */
// 手写声明模块
declare module 'lodash' {
    // 声明不需要写实现的
    export function join (args: any[]):void
}

// 声明变量
declare let cwhyName:string

// 声明函数
declare function whyFoo(): void

// 声明类
declare class CPerson {
    name: string
    age: number
    constructor (name:string, age:number)
}

// 声明文件
// 声明jpg结尾的文件
declare module '*.jpg'

// 声明命名空间
declare namespace $ {
    export function ajax (): void
}


// 实现在对应的业务代码写