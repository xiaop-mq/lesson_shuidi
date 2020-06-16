## ES5/ES6 的继承除了写法以外还有什么区别？

## ES6的class不存在变量提升
class声明会提升，但是不会初始化赋值。Foo进入暂时性死区，类似于let、const声明变量。

## ES6的class默认情况下是严格模式


## class的所有方法都是不可枚举的

## class所有方法都没有原型对象prototype,所以也没有constructor,不能使用new来调用。


## ES6的class必须通过new来调用

## class内部无法重写类名字