## JS深入之执行上下文栈

JS代码执行顺序，代价都以为是顺序执行，毕竟
```js
var foo = function (){
    console.log('foo1')
}
foo() // foo1

var foo = function (){
    console.log('foo2')
}
foo() // foo2
```

换个代码
```js
function foo() {
    console.log('foo1');
}
foo(); // foo2

function foo() {
    console.log('foo2')
}
foo(); // foo2
```
- js并非一行一行的分析和执行程序，而是一段一段的分析执行。当执行一段代码的时候，会进行一个"准备工作"，比如第一个例子中的变量提升，和第二个例子中的函数提升。

1. 可执行代码类型：全局代码、函数代码、eval代码。
当执行到一个函数的时候，就会进行准备工作，这里的准备工作，专业点叫"执行上下文"

2. 执行上下文栈
看作是数组
```js
ECStack = [];
```
js开始执行解释代码的时候，最下遇到全局代码，所以初始化的时候首先就会向执行上下文栈压入全局执行上下文，我们用globalContext表示它，并且只有整个应用程序结束的时候，ECStack才会被清空，所以ECStack最底部永远有个globalContext
```js
ECStack = [
    globalContext
]
```