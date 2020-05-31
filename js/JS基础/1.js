// 创建变量的几种方式
// 1.基于VAR创建
var n = 10;
var m;
console.log(n,m); // 10 undefined

// 基于ES6的LET创建
let a = 100;
a = 200;
console.log(a); // 200

// 基于ES6的const创建(基于const定义的变量一般也称为常量)
// const b = 1000;
// b = 2000;
// console.log(b); // Assignment to constant variable.

// 创建一个函数
function func(){

}
console.log(func)

// 创建一个类
class parent{}
console.log(parent)

// 基于模块规范导入某个模块
import axios from './axios';
let axios = require('axios');