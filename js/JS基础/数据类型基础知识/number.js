// 1.number 包含：正数、负数、0；NaN；infinity,也是number类型

import { symbol } from "prop-types";

// NAN:not a number不是一个有效数字，但是属于number类型
// NAN和任何值都不相等
// NAN == NAN // false

// 验证n是不是有效数字，怎么验证？
// NAN代表不是一个有效数字，那么直接用n == NAN检测可以吗？
// 不仅而已。NAN与自身都不相等。

// isNaN概念：用来验证一个值是否位非有效数字
// 返回值：有效数字false;无效数字true
console.log(isNaN(1)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
console.log(isNaN('AA')) // true
console.log(isNaN('12.5')) // false
console.log(isNaN('12.5px')) // true
console.log(isNaN([])) // false
console.log(isNaN([10])) // false
console.log(isNaN([10,20])) // true
console.log(isNaN({})) // true
console.log(isNaN(null)); //false
console.log(isNaN(undefined)) // true
console.log(isNaN(symbol(1))) // 报错

// 注意使用isNaN进行检测的时候，非数值类型要转化为数字类型

// number([value]) 有效数字转为具体数，其他转为NaN
// 空字符串转数字0

// 布尔转数字 true:1 false:0

// null/undefined转数字：null:0 undeined:1

// 不能把symbol转为0 否则报错

// 对象转数字
// 先把obj转为字符串[object,object]
let obj={x:100};
console.log(Number(obj)); //=>NaN
// 空数组对象转化为0
/*
 * 1.先把ARR转换为字符串： "10"
 * 2.在把"10"转换为数字：10
 */
let arr = ["10"];
console.log(Number(arr)); //=>10
/*
 * 1.先把ARR转换为字符串： "10,20"
 * 2.在把"10,20"转换为数字：NaN
 */
arr = ["10", "20"];
console.log(Number(arr)); //=>NaN
console.log(Number([])); //=>  []->''  Number('')->0
console.log(Number(['AA'])); //=> ['AA']->'AA'  Number('AA')->NaN

// 函数转数字
// 结果都是NaN

// 2.parseInt([value])
// 从字符串最左边开始查找,把所有有效字符转换为数字,知道遇到非有效字符,则结束查找
// 处理原理和number不一样
// 把字符串转化为数字类型

// 3.parseFloat([value])
// 比parseInt多识别一位小数点
console.log(Number('12px')); //=>NaN
console.log(parseInt('12px')); //=>12
console.log(parseInt('12px24')); //=>12
console.log(parseInt('width:12px')); //=>NaN
console.log(parseInt('12.5px')); //=>12
console.log(parseFloat('12.5px')); //=>12.5  parseFloat比parseInt多识别一个小数点

console.log(Number(true)); //=>1
console.log(parseInt(true)); //=>先把TRUE转换为字符串"TRUE"  parseInt('true') =>NaN
console.log(parseInt(NaN)); //=>NaN
console.log(Number(null)); //=>0
console.log(parseInt(null)); //=> parseInt('null') =>NaN
console.log(isNaN(Number(parseInt("0.8")))); //=>parseInt("0.8")->0   Number(0)->0  isNaN(0)->false

console.log(Number('')); //=>0
console.log(parseInt('')); //=>NaN

// 三 方法
// 1. toFixed()
// 语法:数字.toFixed(N)
// 保留小数点最后N位
let n = 3.1415926;
console.log(n.toFixed(2)) // 3.14

// 2.MAX_SAFE_INTERGER
// 最大安全数(js能够识别的最大整数)
// 数值:9007199254740991
// ES6提供一个新的数据类型BigInt