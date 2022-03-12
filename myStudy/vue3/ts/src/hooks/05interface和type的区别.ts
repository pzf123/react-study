/*
 * @Author: your name
 * @Date: 2022-03-10 20:23:57
 * @LastEditTime: 2022-03-10 20:43:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/05interface和type的区别.ts
 */
// 1. 如果定义非对象类型，通常推荐使用type, 如Direction, Alignment, 一些联合类型，一些Function, 其他情况推荐使用interface
// 2. 如果是定义对象类型，他们是有去呗
// interface 可以重复对某个接口来定义属性和方法
// 会合并属性
interface IFoo {
    name: string
}
interface IFoo {
    age: string
}
const foo: IFoo = {
    name: 'ddd',
    age: 'ddd'
}
// 安装typescript会默认安装一下lib 类型
// document.getElementById('app') as HTMLDivElement
// window.addEventListener
// 想要给window拓展属性
interface Window {
    age: number
}
// type定义的是别名，别名是不能重复的

export {}
