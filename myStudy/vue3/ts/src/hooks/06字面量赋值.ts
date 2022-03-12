/*
 * @Author: your name
 * @Date: 2022-03-10 20:41:07
 * @LastEditTime: 2022-03-10 20:52:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/06字面量赋值.ts
 */
interface IFoo {
    name: string
    age: number
}
const foo:IFoo = {
    name: 'dd',
    age: 13
}
// 类型推导，是对象
const info = {
    name: 'ddd',
    age: 13,
    address: ''
}
// 这里会报错
// const person1: IFoo = {
//     name: 'ddd',
//     age: 13,
//     address: ''
// }
// 把对象的引用赋值过来
// 类型校验，会进行freshness擦除一些没有的属性
const person: IFoo = info

function printInfo(info: IFoo) {
    // 会报错
    // info.address
}
// 会报错
// printInfo({
//     name: 'ddd',
//     age: 13,
//     address: ''
// })
printInfo(info)

export {}