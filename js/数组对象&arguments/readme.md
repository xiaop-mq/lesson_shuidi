## JavaScript 深入之类数组对象与 arguments
- 讲解类数组对象与对象之间的相似与差异以及arguments的注意要点
1. 类数组对象
   拥有一个`length属性`和`若干索引属性的对象`
   为什么叫类数组对象呢？
   我们现在从读写、获取长度，遍历三个方面看看这两个对象
2. 调用数组方法
   无法直接调用，我们可以用Functon.call间接调用
3. 类数组对象
   要说到类数组对象，`Arguments` 对象就是一个类数组对象。在客户端 JavaScript 中，一些 DOM 方法(document.getElementsByTagName()等)也返回类数组对象。
- arguments对象
 argument对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments指代该函数中的Arguments对象。
- 我们可以看到除了类数组的 `索引属性`和`length属性`之外，还有一个`callee属性`，接下来我们一个一个介绍。
1. length属性
   Arguments对象的length属性，表示实参的长度
2. callee属性
   代表通过它可以调用函数自身
- arguments对象几个注意的要点
1. arguments和对应参数的绑定
2. 传递参数：将参数从一个函数传递到另一个函数
3. 强大的ES6，使用ES6的 ... 运算符，我们可以轻松转成数组。
- 应用
    arguments的应用其实很多，在下个系列，也就是 JavaScript 专题系列中，我们会在 jQuery 的 extend 实现、函数柯里化、递归等场景看见 arguments 的身影。这篇文章就不具体展开了。
- 如果要总结这些场景的话，暂时能想到的包括：
    参数不定长
    函数柯里化
    递归调用
    函数重载
