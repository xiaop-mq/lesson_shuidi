## 3个判断数组的方法，请分别介绍它们之间的区别和优劣
## Object.prototype.toString.call()、instanceof 以及 Array.isArray()

## Object.prototype.toString.call()
- 每一个继承Object的对象都有toString方法，如果toString方法没有重写的话，会返回[Object type]，其中type为对象的类型。
- 除`Object外，其他类型直接使用toString方法时，会直接返回内容字符串，所以我们需要使用call、apply、bind来改变toString方法的执行上下文`。
- 这种方法对于所有基本的数据类型都能进行判断，即使是undefined和null。
```js
Object.prototype.toString.call('An') // "[object String]"
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(function(){}) // "[object Function]"
Object.prototype.toString.call({name: 'An'}) // "[object Object]"
```
- Object.prototype.toString.call()常用于判断浏览器内置对象时。


## instanceof
- instanceof的内部机制是`通过判断对象的原型链中是不是能找到类型的prototype`.
- 使用instanceof判断一个对象是否为数组，instanceof会判断这个对象的原型链上是否会找到对应的array的原型，找到返回true,否则返回false.
```js
[]  instanceof Array; // true
```
- 但是instanceof只能`用来判断对象类型，原始类型不可以`。并且所有对象类型的instanceof Object都是true
```js
[]  instanceof Object; // true
```

## Array.isArray()
- 判断对象是否为数组
- instanceof和isArray
  - 检测Array实例时，Array.isArray优于instanceof,因为Array.isArray能检测出iframes
  ```js
  var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    xArray = window.frames[window.frames.length-1].Array;
    var arr = new xArray(1,2,3); // [1,2,3]

    // Correctly checking for Array
    Array.isArray(arr);  // true
    Object.prototype.toString.call(arr); // true
    // Considered harmful, because doesn't work though iframes
    arr instanceof Array; // false
  ```
- Array.isArray()与Object.prototype.toString.call()
   - Array.isArray时ES5新增的方法，当不存在Array.isArray(),可以用Object.prototype.toString,call()实现。
   ```js
   if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
   ```