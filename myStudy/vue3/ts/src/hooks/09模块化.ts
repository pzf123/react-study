/*
 * @Author: your name
 * @Date: 2022-03-12 16:34:46
 * @LastEditTime: 2022-03-12 16:52:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/09模块化.ts
 */
// javascript 2015推出模块化
// 命名空间， 比较老的技术
export namespace time {
    // 外部能访问需要export
    export function format(time: string) {
        return '2022'
    }
    function foo() {
        
    }
}
namespace price {
    export function format(time: string) {
        return '99.99'
    }
}

console.log(time.format)