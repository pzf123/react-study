/*
 * @Author: your name
 * @Date: 2022-03-08 17:54:12
 * @LastEditTime: 2022-03-12 16:44:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/03.类的定义.ts
 */
// 编程范式
// 面向对象编程 c++
// 函数式编程 Javascript lisp
// Hook -> function Component 
// setup

// 认识类的使用, 定义，抽象，封装，继承，多态
// es5是通过函数和原型连，类继承
// es6 引入class关键字，可以更方面使用类

// 1. 类的定义
class Person {
    // 定义属性和方法
    // ts要求定义属性需要初始化, 可以直接初始化或者通过构造器来初始化
    name: string
    age: number = 0
    intr: string
    eating() { 
        // console.log('父类')
    }
    constructor(name: string, intr?: string) {
        this.name = name
        this.intr = intr || ''
    }
}
const p = new Person('dd')
// console.log(p);

// 2. 类的继承
class Student extends Person {
    sno: number
    eating () {
        // 在子类中调用父类的方法
        super.eating()
        // console.log('子类')
    }
    studying () {}
    
    constructor(name: string, sno:number, intr?: string) {
        // 调用父类的构造器
        super(name, intr)
        this.sno = sno
    }
}
class Teacher extends Person {
    learning () {}
}
let lily = new Student('limin', 333)
// 会在子类里去找有没有方法，优先执行子类方法
lily.eating()
// console.log(new Teacher('lily', 'teacher'));

// 3. 类的多态
class Animal {
    age: number = 4
    action () {
        console.log('animal running');
        
    }
} 
class Dog extends Animal {
    action () {
        console.log('dog running');
    }
}
class Fish extends Animal {
    action () {
        console.log('fish swimming');
    }
}
new Dog().action()
// 相同类型
// 多态的目的是为了写出更有通用性的代码
// 也可用函数重载或者使用联合类型，但是比较麻烦
function makeActions(animals: Animal[]) {
    animals.forEach(item => {
        item.action()
    })
}
makeActions([new Dog(), new Fish()])

// 4. 类的成员修饰符
// public  private protected 
class Job {
    public name: string = 'emm'
    // 只能内部访问
    private password: string ='123456'
    // 在父类和子类中能访问
    protected protect: string ='123456' 
    getPassword() {
        return this.password
    }
}
class NewJob extends Job {
    getName() {
        // 子类也能访问
        return this.protect
    }
}
const job = new Job()
// console.log(job.getPassword())
// console.log(new NewJob().getName());

// 4. readonly 只读属性
class Person2 {
    // 1.只读属性能在构造器中赋值，赋值后不可以修改
    // 2.属性本身不能修改，但是如果是对象类型，对象中的属性是可以修改的
    readonly name: string
    age:string = 'dd'
    readonly friend?: Person2
    constructor(name: string, friend?: Person2) {
        this.name = name
        this.friend = friend
    }
}
const p2 = new Person2('why', new Person2('ki'))
// console.log(p2.name);
// console.log(p2.friend);
if (p2.friend) {
    p2.friend.age = 'dd'
}

// 5. getter 和 setter
class Person5 {
    private _name: string
    constructor(_name:string) {
        this._name = _name 
    }

    // 私有属性推荐使用setter/getter去访问
    set name(newName) {
        this._name = newName
    }
    get name() {
        return this._name
    }
}
const p5 = new Person5('feng') 
console.log(p5.name)
p5.name = 'name'
console.log(p5);

// 6. 类的静态成员
class Person6 {
    name: string = 'dddddsafe'
    age: number = 12
}
const p6 = new Person6()
console.log(p6.name);

// 静态属性通过类获取
class Student6 {
    static time:string ='11:29'
}
console.log(Student6.time); 

// 7.抽象类，抽象方法
function makeArea(shape: Shape) {
    return shape.getArea()
}
//  父类,  抽象类不能new实例化，抽象类中的方法必须得被子类实现(抽象子类除外）
abstract class Shape {
    abstract getArea():number
}
class Rectangle extends Shape {
    private width:number
    private height:number
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}
class Circle extends Shape{
    private r:number 
    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r * this.r *3.14
    }
}
console.log(makeArea(new Rectangle(14, 12)));
console.log(makeArea(new Circle(14)));

// 8. 类的类型
class Person8 {
    name:string = '112'
}
const p9: Person8 = {
    name:'44'
}













export {}