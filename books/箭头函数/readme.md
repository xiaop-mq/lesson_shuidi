- 箭头函数表达式的语法比函数表达式更简洁，并没有ta自己的this,arguments,super或new.target.箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能作为构造函数。
1. 基础语法
(param1, param2,...,paramN) => { statements }
(param1, param2,...,paramN) => expression
相当于：(param1, param2,...,paramN) => { return expression }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号
() => { statements }

2. 高级语法
//加括号的函数体返回对象字面量表达式：
params => ({foo: bar})
//支持剩余参数和默认参数
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6

- 引入箭头函数有两个方面的作用：更简短的函数且不绑定this
箭头函数不会创建自己的this,它只会从`自己的作用域链的上一层继承this`
- 与严格模式的关系
  this词法层面的，严格模式中与this相关的规则都将被忽略
- 通过call和apply调用
  由于箭头函数没有自己的this指针，通过call(),apply()调用函数时，只能传递参数，不能绑定this.
- 不绑定arguments
   箭头函数不绑定arguments对象
- 使用箭头函数作为方法
- 箭头函数不能用作构造器，和new一起用会抛出错误
- 箭头函数没有prototype属性
- 使用yield关键字
  yeild关键字不能再箭头函数中使用，箭头函数不能作为函数生成器

- 箭头函数可以有函数体
  简写体中：需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的return语句
- 返回对象字面量
  记住用params => {object:literal}这种简单的语法返回对象字面量是行不通的

  （{}）里面的代码被解析为一系列语句

- 箭头函数在参数和箭头之间不能换行
- 解析顺序
```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};      
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```