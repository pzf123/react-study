/*
 * @Author: your name
 * @Date: 2022-03-10 20:53:20
 * @LastEditTime: 2022-03-10 21:08:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/07枚举类型.ts
 */
// 枚举类型是ts的特性
// 枚举就是将一种可能出现的值一个个列举出来，定义在一个类型里，这个类型就是枚举类型
// 枚举允许开发者定义一组命名常量，常量可以是数字，字符串类型
enum Direction {
    // 一般都是大写的
    LEFT = 122,
    RIGHT,
    TOP=33,
    BOTTOM
}
function turnDirection(direction: Direction){
    console.log(direction)
    switch (direction) {
        case Direction.LEFT: 
            console.log('left');
            break
        case Direction.RIGHT: 
            console.log('RIGHT');
            break
        case Direction.TOP: 
            console.log('TOP');
            break
        case Direction.BOTTOM: 
            console.log('BOTTOM');
            break
        default:
            const foo: never = direction
            break
    }
}
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
const name: string = 'ddd'
const d: Direction = Direction.LEFT
export {}