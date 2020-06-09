js类型转换(上)
1. 将值从一种类型转换成另一种类型成为类型转换。
ES6数据类型：number、string、null、undefined、boolean、symbol
- 原始值转布尔值
js中只有6种值可以被转换成false,其它都会被转换成true
```js
console.log(Boolean()) // false

console.log(Boolean(false)) // false

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("")) // false
```

- 原始值转数字
```js
console.log(Number()); // +0

console.log(Number(undefined)); // NaN
console.log(Number(null)); // +0

console.log(Number(false)); // +0
console.log(Number(true)); // 1

console.log(Number("123")) // 123
console.log(Number("-123")) // -123
console.log(Number("1.2")) // 1.2
console.log(Number("000123")) // 123
console.log(Number("-000123")) // -123

console.log(Number(0x11)) // 17

console.log(Number("")) // 0
console.log(Number(" ")) // 0

console.log(Number("123 123")) // NaN
console.log(Number("foo")) // NaN
console.log(Number("100a")) // NaN

```

- 原始值转对象
```js
var a = 1;
console.log(typeof a) // number
var b = new Number(a) 
console.log(b) // object
```

- 对象转布尔值
```js
console.log(Boolean(new Boolean(false))) // true
```

js类型转换(下)
```js
console.log(1 + '1')
```

## js深入浮点数精度
0.1 + 0.2 = 0.3 ??? 原因：浮点数精度导致的

- 浮点数转二进制
1020用十进制表示
1020 = 1*10^3+0*10^2+2*10^1+0*10^0
如果 1020 用二进制来表示呢？
1020 = 1 * 2^9 + 1 * 2^8 + 1 * 2^7 + 1 * 2^6 + 1 * 2^5 + 1 * 2^4 + 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 0 * 2^0

- 浮点数的存储
- 浮点数的运算
0.1+0.2的计算
1. 首先进行对阶，所谓对阶就是把解码调整为相同，比如0.1是1.1001100110011…… * 2^4,阶码是-4，而 0.2 就是 1.10011001100110...* 2^-3，所以先调整为相同的阶码再进行计算，调整原则是小阶对大阶，也就是 0.1 的 -4 调整为 -3，对应变成 0.11001100110011…… * 2^-3
2. 尾数计算
得到结果为 10.0110011001100110011001100110011001100110011001100111 * 2^-3

1. 计算机里的数据是以二进制缓存的，所以在计算0.1+0.
2之前要进行二进制的转换
2. js是如何存储无限循环二进制数的
有一个标准IEEE 754标准，64位固定长度表示
3. 浮点数是如何保存的？
单精度：
1+8+23
第一部分：存储号位
第二部分：存储指数
第三部分：存储小数
双精度：
1+11+52

4. 指数部分为负数如何保存？
IEEE有一个偏移量，对于指数部分会加上偏移量进行保存，即时这个数为负数，加上偏移量都能够变为正数。