/*
 * @Author: your name
 * @Date: 2022-03-10 19:33:21
 * @LastEditTime: 2022-03-10 20:21:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/04接口的使用.ts
 */
// 类的别名
type InfoType = {
    readonly name: string
    age: number
}
const info:InfoType = {
    name: 'why',
    age: 18,
}

// 接口 interface
// 有些公司的接口规范会在加I代表是接口
// 可以定义类型
// 可以定义可读属性
interface InfoType2 {
    readonly name: string
    age: number,
    friend ?: string
}
const info2: InfoType2 = {
    name: '2',
    age: 12
}

// 索引类型
interface IFrontLanguage {
    [index:number]: string
}
const frontLanguage: IFrontLanguage = {
    0: 'html',
    1: 'css',
    2: 'javascript',
    4: 'vue.js'
}

interface ILanguageYear {
    [index: string]: number
}

const languageYear:ILanguageYear = {
    "java": 1995
}


// 函数类型
// type CalcFn = (n1: number, n2: number) => number
// 可调用接口，阅读性差一点，type的相对易读
interface CalcFn {
    (n1: number, n2: number): number
}

function calc(n1: number, n2: number, calcFn: CalcFn) {
    return calcFn(n1, n2)
}
const add: CalcFn = (n1, n2) => {
    return n1 + n2
}
calc(20, 30, add)


// 接口的继承
interface ISwim {
    swimming: () => void
    walking: () => void
}
interface IFly {
    flying: () => void
}
// 支持多继承
interface IAction extends ISwim, IFly {

}
const action: IAction = {
    swimming() {

    },
    flying () {

    },
    walking () {
        
    }
}


// 交叉类型
// 联合类型
type whyType = string | number
type Direction = 'left' | 'right' | 'center'

// 另一种组合类型的方式： 交叉类型
type MyType1 = ISwim | IFly
// 交叉类型相当于多重继承
type MyType2 = ISwim & IFly

const obj1:MyType1 = {
    swimming() {

    },
    walking () {
        
    }
}
const obj2:MyType1 = {
    flying () {

    }
}
const obj3:MyType2 = {
    swimming() {

    },
    flying () {

    },
    walking () {
        
    }
}


// 接口的实现 
interface IEat {
    eating: () => void
}
class Animal {

}
// 类的继承只能单继承
// 实现，类可以实现多接口
class Fish extends Animal implements IEat {
    eating () {
        
    }
}
class Person implements IEat {
    eating() {}
}
// 编写一些公共的API，面向接口编程
function swimAction (swimable: Fish) {
    swimable.eating()
}
swimAction(new Fish())

// 只要实现了这个接口的都能传进来
function swimAction2 (swimable: IEat) {
    swimable.eating()
}
swimAction2(new Fish())
swimAction2(new Person())
const monkey:IEat = {
    eating: () => {}
}
swimAction2(monkey)

