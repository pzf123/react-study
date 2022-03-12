/*
 * @Author: your name
 * @Date: 2022-03-06 16:30:08
 * @LastEditTime: 2022-03-08 18:18:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/02typescript的数据类型.ts
 */

import { Direction } from "readline"

// 1. any 任意类型
// 在某些js添加具体数据类型时就用any, 跟原生的js一样
let message: any = 'hell0'
message = 333

// 2. unknown
// unknown只能赋值给any和unknown
// any能赋值给任意类型

let a: unknown
const flag = true
if (flag) {
    a = 'ddd'
} else {
    a = 'message'
}

// 3. void表示函数没有返回值的, 一般不写的
function sum (num1:number, num2:number):void {
    // return num1 + num2
}
const a3  = sum(1, 3)

// 4. never表示永远不会发生的值的类型
function foo1():never {
    while(true) {
        let age = 1
        age++
    }
}
function foo2():never {
    throw new Error()
}
// never应用场景
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            break
            case 'number':
                break
            case 'boolean':
                break
            default:
                // 校验，让每一种情况都要写case
                const check: never = message
                console.log(check)
    }
}

handleMessage(true)

// 5.tuple 元祖类型: 多种元素的组合
const info:any[] = ['why', 123]
const name = info[0]
// 数组没法确定每一项的类型
// 元祖类型
const info2: [string, number] = ['dd', 445]
const name2 = info2[0]
// 应用场景
// hook：useState
// cosnt [counter, setCounter] = userState(10)
// counter, setCounter是函数
function userState(state:number) {
    let currentState = state
    const changeState = (newState: number) => {
        currentState = newState
    }
    const arr: [number, (newState: number) => void] = [currentState, changeState]
    return arr
}
const [counter, setCounter] = userState(2)

// 优化代码，采用泛型
function userState2<T>(state:T) {
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }
    const arr: [T, (newState: T) => void] = [currentState, changeState]
    return arr
}
const [counter2, setCounter2] = userState2('2')

// 类型补充

// 6. 函数类型的书写
const foo: ((a: string, b:string) => number) = (num, num2) => {
    return 999
}
foo('d', 'dd')

// 给参数加上类型注解： num1: number
// 给返回值加上类型注释： （）:number
// 开发中，可以不写返回的类型（自动推导）
function sum3(num1: number, num2: string):number {
    return num1
}
sum3(33, 'ddd')

const names4 = ['dddd', 'dddd']
// item可以根据上下文的环境推导出来，这个时候可以不加注解
names4.forEach(item => {
    item.split(',')
})

//  7.对象类型 
// {x: number, y:number}
// z?: number  ？:可选类型
function printPoint(point: {x: number, y: number, z?:number}) {
    return [point.x, point.y, point.z]
}
printPoint({x: 1, y: 3, z: 4})
printPoint({x: 1, y: 3})


// 8. 联合类型
// 允许使用多种运算符，构造新的类型
function printId(id: number | string | boolean) {
    console.log(id)
    // narrow: 缩小
    if (typeof id === 'string') {
        id.toLocaleLowerCase()
    }
}

// 9. 可选类型
function foo3(message?:string) {
    console.log(message);
}
//  可以不传，也可以传undefined, 也可以传具体类型
foo3()
function foo4(message:string | undefined) {
    console.log(message);
}
// 区别要明确指定undefined
foo4(undefined)

// 10. 类型别名
type UnionType = string | number
type PointType = {
    x: number,
    y: number,
    z: number
}

// 11.类型断言
// typescript无法获取到具体的类型信息，这时候，我们就需要使用类型断言
// 示范1
// 类型推导，返回的是HTMLElement
// 通过类型断言将其成具体的类型img
// const el = document.getElementById('why') as HTMLImageElement
// el.src = 'dd'

// 示范2
class Person {
    learn() {

    }
}
class Student extends Person {
    studying () {

    }
}
function sayHello (p: Person) {
    (p as Student).studying()
}
// 示例3
// 将类型转成any或unknown再转给指定类型, 不建议使用
const message2 = 'hello'
const num: number = message2 as any as number
const num3: number = message2 as unknown as number

// 12.非空类型断言 
function  printMessageLength(message?: string) {
    // 运行会报错
    // console.log(message.length)
    // 使用非空断言
    message!.length
}
printMessageLength('ddd')
// 还是会报错，所以采用可选链，只是有值的时候非空断言不会报错，当没值的时候就会报错
// printMessageLength()

// 13.可选链的使用 （es12)
// 作用: 当对象的属性不存在的时候会短路，直接返回undefined， 如果存在才会继续执行
type Person2 = {
    name: string
    friend ?: {
        name: string
        age?:number
    }
}
const info3: Person2 = {
    name: 'friend',
    friend: {
        name: 'why'
    }
}
info3.friend?.name

// 14. ?? 和 !!
// !!将值转化为Boolean类型
const message4 = "hello world"
// const messageFlag = Boolean(message4)
// const messageFlag = message4 ? true: false
const messageFlag = !!message4

// ?? (es11) 空值合并操作符，当左边为null或undefined是等于给右侧的值，不然等于左侧的值
const message5: string | null = null
// const content = message5 ? message5 : '你好'
const content = message5 ?? '你好'
console.log(content);

// 15. 字面量类型
// message6的类型是”hello world“, 叫做字面量类型
const message6 = "hello world"
const num6: 123 = 123

// 字面量类型的意义，就是必须结合类型
let align: 'left' | 'right' | 'center' = 'left'
// 会报错
// align = 'dd'


// 16. 字面量推理
const info7 = {
    name: 'ddd',
    age: 18
}
// 会带来安全隐患
info7.name = 'ddd344'
console.log(info7.name);

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {

}
const option = {
    url: 'http://',
    method: "POST"
}
// 会报错，因为method可以随便赋值的
// request(option.url, option.method)

// 解决方法1
type Request = {
    url: string,
    method: Method
}
// 建议传入的时候显示
const option2:Request = {
    url: 'http://',
    method: "POST"
}
request(option.url, option2.method)

// 解决方法2
request(option.url, option.method as Method)

// 解决方法3
// 将对象变成只读
const option3:Request = {
    url: 'http://',
    method: "POST"
} as const
request(option.url, option3.method)


// 17.类型缩小norrow
/**
 * 常见的类型缩小
 * typeof 拿到类型进行判断
 * 平等缩小 === !== switch
 * instanceof 判断某一个对象是否是某一个对象的实例
 * in 当前某个对象是否包含某个方法
 */
class Student2 {
    name:string = 'dddddd'
    getName () {
      console.log('我的名字是', this.name)
   }
}

type IdType =  number | string | 'GET' | 123 | Date | Student2 | Fish
function printId2 (id:IdType) {
    if (typeof id === 'string') {
        id.toLocaleLowerCase()
    }
    if (id === 'GET') {
        request('http: ///', id)
    }
    switch (id) {
        case 123:
            console.log('木头人');
            break
    }
    if (id instanceof Date) {
        id.getDate()
        console.log(id.getDay())
    }
    if (id instanceof Student2) {
        id.name = '什么不重要'
        id.getName()
    } 

}
printId2(new Date())
printId2(new Student2())
printId2(123)

type Fish = {
    swimming: () => void
}
type Dog = {
    swimming: () => void
}

const fish:Fish = {
    swimming: () => {
        
    }
}
function walk (animal: Fish | Dog) {
    if ('swimming' in animal) {

    }
}


// 18.函数的类型

// 1.第一种
function foo5() {
}
type FooFnType = () => void
function bar(foo:FooFnType) {
    foo()
}
bar(foo5)
// 2. 定义常量时，编写函数的类型
// num1, num2是形参，没有意义, 但是不能省略
// 可选类型要放在参数的最后 ?: number 相当于undefine | number, 跟直接写的区别是可以不传参数
type AddType = (num1: number, num2?: number, num3?:number) => void
const add:AddType = (num3:number, num4:number = 100) => {
    return num3 + num4
}
add(12, 12)
// 当时const要结合可选，才能让默认值设置生效
add(12)

function add2(num3:number = 7, num4:number = 100)  {
    return num3 + num4
}
// 当用function并且有默认值时可以省略参数
add2(2)
// 可以传undefine站位，会用默认值
add2(undefined, 12)
console.log(add(3));

// 剩余参数
function sum5 (iniitalStr: string, ...nums:number[]) {
    console.log(iniitalStr + nums.join(','));
    
}
sum5('木头人', 1, 2, 3)

// 18. 函数的重载
type AddFunType = number | string
/**
 * 联合类型有两个缺点
 * 1、进行很多的逻辑判断，类型缩小
 * 2. 返回值的类型仍不能确认
 */
// 元祖类型不能相加
// function addFun(a1:AddFunType, a2:AddFunType) {
//     // 报错
//     return a1 + a2
// }

// 函数重载，函数的名称相同，但是参数不同的几个函数，就是函数的重载
function addFun(num1:number, num2:number):number
function addFun(num1:string, num2:string):string
function addFun(num1:string, num2:number):string
function addFun(num1:any, num2:any):any {
    return num1 + num2
}
const addResult = addFun(12, 13)
const addResult2 = addFun('12', '13')
const addResult3 = addFun('12', 22)
console.log(addResult, addResult3);


// 19. 可推导的this类型
// this在不同情况会绑定不同的值，所以它的类型就很难把握
// vue3 Composition API --> setup 函数式编程
// 面向对象 --> this 躲不开的

// this是可以被推导出来的
type ThisType = {
    name: string
}
const info9 = {
    name: 'why',
    eating() {
        console.log(this.name + 'eating')
    },
    // 独立的函数
    running: running
}
info9.eating()

// this的不明确类型
// 会报错
// function running() {
//     console.log(this.name + 'running')
// }
// 解决方法
function running(this: ThisType, str?:string) {
    console.log(this.name + ' running', str)
}

// 隐式参数,  多添加参数
info9.running('ddd')
// 显式参数
running.call({name: 'ddewrewr'}, 'call')
running.apply({name: 'ddewrewr'}, ['apply'])




export {} 
