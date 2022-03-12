/*
 * @Author: your name
 * @Date: 2022-03-12 17:04:31
 * @LastEditTime: 2022-03-12 17:35:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/src/hooks/10.typescript类型管理.ts
 */
// 编写业务逻辑在.ts, 最终都会编译成.js文件
// 另外一种文件.d.ts文件，用来类型的声明，用来类型检测，告知ts我们有这类型的文件declare
// 内置类型声明 document Math 
// 如果没有声明文件，可以去对应的社区找一下，引入一下
// 外部类型声明 axios
// 自己定义的声明


// 社区公用库DefinitelyTyped存放类型声明文件
// https://github.com/DefinitelyTyped/DefinitelyTyped
// 查找声明文件的地址
// https://www.typescriptlang.org/dt/search?search=
// 外部声明文件 自带 /@types/lodash

// 对查找不到的可以自定义声明文件
// 创建一个xxx.d.ts文件 declare