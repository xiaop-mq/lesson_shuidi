## Array.from()作用。
1. 语法：
```js
Array.from(arrayLike[, mapFunction[, thisArg]])
```
- arrayLike: 必传参数，想要转成数组的伪数组对象或可迭代对象。
- mapFunction():可选参数，mapFunction(item, index){...}是在每个集合中的每个项目上调用的函数。返回的值插入到新集合中。
- thisArg: 可选参数，执行回调函数mapFunction时this对象。这个参数很少使用。
```js
const someNumbers = {'0': 10, '1': 15, length: 2 };
Array.from(someNumbers, value => value *2);// => [20, 30]
```