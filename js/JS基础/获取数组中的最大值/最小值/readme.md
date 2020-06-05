- 方法一：基于sort排序
先排序，第一项为最小值，最后一项是最大值，选取首项是我们需要的。

1. 基于es6的展开运算符
```js
let min = Math.min(...ary)
console.log(min) // 8
```
此方法为es6语法，所以不兼容低版本浏览器

2. 利用apply方法实现
我们利用apply以数组的方式传递参数的特性，所以this指向谁并不重要
```js
let min = Math.min.apply(Math.ary)
console.log(min);
```


## 方法三：假设法
```js
let max = ary[0];
for(let i = 1; i < ary.length; i++){
    let item = ary[i];
    item > max ? max = item : null
}
// for循环也可以改写成foreach
ary.forEach(item =>{
    item > max ? max = item : null
})
console.log(max);
```