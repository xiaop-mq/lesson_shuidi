## JavaScript深入之参数按值传递
- JavaScript深入系列第九篇，除了`按值传递`、`引用传递`，还有第三种传递方式 —— 按`共享传递`
- ECMAScript中所有函数的参数都是`按值传递`的。
- 什么是按值传递呢？
也就是说，`把函数外部的值复制给函数内部的参数`，就和`把值从一个变量复制到另一个变量一样`。
- 引用传递
  所谓按引用传递，就是`传递对象的引用`，`函数内部对参数的任何改变都会影响该对象的值`，因为两者引用的是同一个对象。
- 共享传值
  共享传递是指，在`传递对象的时候，传递对象的引用的副本`。
## 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！