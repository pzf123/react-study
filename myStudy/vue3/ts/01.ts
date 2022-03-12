/*
 * @Author: your name
 * @Date: 2022-03-05 14:03:40
 * @LastEditTime: 2022-03-05 16:14:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/01.ts
 */
var message:string = "Hello Worldee4e";
console.log(message);
(
    () => {
        function sayHi (text:string) {
            console.log('hi' + text)
        }
        let text = '小明'
        sayHi(text)
    }
)()