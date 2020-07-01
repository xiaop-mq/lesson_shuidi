## ES6的特性
- 类
1. ES6的class和ES5的类有什么区别？
   - ES6的class中定义的属性是不可枚举的
   - ES6的class默认情况下是严格模式
   - ES6的class不能通过new来调用
   - ES6的class不存在变量提升
   - ES6的class的子类必须在构造函数调用super(),这样才能调用this对象。

- 模块化
1. ES5不支持原生的模块化，ES6中模块化作为重要部分被添加进来。由export和import组成，每个模块化有自己单独的作用域，模块之间的关系是通过export来规定对外暴露的接口，通过import来引用其他模块。

- 箭头函数
=>。箭头函数与包围它的函数共享同一个this，解决了this指向的问题。

- 对象属性的缩写
- 解构赋值
- 模板字符串
${}

- 函数默认参数值 
- let/const 

- promise
一个对象，是异步编程的解决方案。
.then实现异步编程串行化，避免了回调地狱。
- 延展操作符
...



## ES7的特性
- Array.prototype.includes()
includes()函数判断数组中是否包含指定的值，包含返回true，不包含返回false.
includes和indexOf相似

- 指数操作符
引入了指数运算符 ** ，** 具有与Math.pow(...)等效的计算结果。


## ES8的特性
- async/await
异步函数，将我们从回调地狱中解放出来，是整个代码看起来很简洁。

- Object.values()
与Object.keys()类似的新函数，返回的是Object自身属性的所有值，不包含继承的值。

- Obeject.entries()
返回一个给定对象自身可枚举属性的键值对的数组。

- String.padding
允许将空字符串或者其他字符串添加到原始字符串开头。
String.prototype.padStart
String,prototype.padEnd
1. targetLength: 当前字符串填充的目标长度
2. padString: 填充字符串

- 函数参数列表结尾运行逗号

- Object.getOwnPropertyDescriptors()
获取自身属性的描述符


## ES9特性

1. 异步迭代
想在async/await中尝试同步循环中执行异步函数。
- 引入了异步迭代器(iterators), 常规迭代器，除了用next()方法返回一个promise之外，还可以是由await+for...of循环一起使用，以串行的方式运行异步操作。

2. promise.finally()
ES6中，一个promise链要么成功进入最后then中，要么失败触发catch().
promise中允许promise.finally无论成功还是失败都可以输出结果。

3. Rest/Spread
提供想数组一样的Rest参数和展开运算符。
- Spread用于收集剩余参数。

4. 正则表达式命名捕获数组
js中用exec()匹配能够返回一个对象，一个包含匹配字符串的类数组。

5. 正则表达式反向断言
6. 正则表达式dotAll模式
7. 正则表达式unicode转义
8. 非转义序列的模板字符串


## ES10的新特性
1. 行分隔符和段分隔符

2. JSON.stringfy

3. Array的flat()方法和flatMap()方法
归纳和合并的方法
- flat()数组降维
- flat()去除数组的空项
- flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组

4. String的trimStart方法和trimEnd方法
去除字符串首部和尾部的空字符串

5. Object.fromEntries()
返回一个给定对象自身可枚举属性的键值对数组

6. Symbol.prototype.description
通过工厂函数Symbol（）创建符号时，您可以选择通过参数提供字符串作为描述

7. String.prototype.matchAll
matchAll() 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

8. Function.prototype.toString()现在返回精确字符，包括空格和注释
9. 简化try {} catch {},修改 catch 绑定

11. 新的基本数据类型BigInt

12. globalThis

13. import()

14. Legacy RegEx

15. 私有的实例方法和访问器
