/*
 * @Author: your name
 * @Date: 2022-03-12 15:57:50
 * @LastEditTime: 2022-03-12 16:33:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/08认识泛型.ts
 */
// 软件工程的主要目的构建不仅仅明确和一直的API, 还能让你代码有很强的重用性

function sum(num1: number, num2: number) {
    return num1 + num2
}
// 让调用者以参数的形式告知 
function sum2<T>(num1: T, num2: T) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2
    }
    return num1
}
// 1.明确传入类型
sum2<number>(1, 3)
sum2<string>('1', '3')
sum2<Array<unknown>>(['1'], ['3'])
// 2.类型推到
sum2(12, 15)

// 可以接收多个类型参数
function sum3<T1, T2>(num1: T1, num2: T2) {
   console.log(num1, num2)
}
sum3<string, number>('1', 2)


// 在开发中常用的名称
// T为Type的缩写，类型
// K V key和value的缩写，键值对
// E Element的缩写，元素
// O Object的缩写，对象


// 泛型接口
interface IPerson {
    name: string
    age: number
}

interface IPerson2<T1 = string, T2 = number> {
    name: T1
    age: T2
}
const obj: IPerson2<string, number> = {
    name: 'dd',
    age: 12
}

// 泛型类的使用
class Point {
    x: number
    y: number
    constructor(x: number, y:number) {
        this.x = x
        this.y = y
    }
}
class Point2<T1, T2> {
    x: T1
    y: T2
    constructor(x: T1, y:T2) {
        this.x = x
        this.y = y
    }
}
new Point2<string, number>('1', 2)


// 数组的定义, 也可以用泛型
const names1: string[] = ['333', 'eee']
const names2: Array<string> = ['333', 'eee']

// 泛型的类型约束
// 使用联合类型限制
function getLength(arg: string | any []) {
    return arg.length
}
interface ILength {
    length: number
}
// 采用extends限制
function getLength2<T extends ILength>(arg: T) {
    return arg.length
}
getLength2('1224')

export {}