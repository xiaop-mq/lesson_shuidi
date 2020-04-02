## 箭头函数很简便，功能也被简化了
1. 箭头函数没有this  学习水平 作用域查找，父级的this
   不够的 
   简约，arrow function 缺了很多东西

- super关键字 举出应用场景？
  super 是继承关系里 表示调用了父元素的构造函数
  class Person {
      constructor() {
          super()
          this.
      }
  }
  函数 super  argument(参数数组) this 由运行的方式来决定 
  class super 用法
  别的可能性让我们的js 函数有super的使用吗？

 - 对象间继承关系的新方法  Object.setprototypeOf(childrenObject,fatherObject)
 - 函数 this arguments super会指向父类,要作为当前子类来调用

2. 'super' keyword unexpected here 箭头函数没有super 关键字
3. 箭头函数不适合用来构造函数，new.target 没有这个

js 一切皆对象 对象 函数 区分一下
对象有__proto__属性 原型对象
函数 prototype
生成对象时，对象的proto属性指向函数的prototype属性
4. 箭头函数是不可以被new 的 因为里面没有this