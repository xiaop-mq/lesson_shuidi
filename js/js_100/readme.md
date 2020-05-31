- 朗读出来
- 手写代码的抄写工作
- 研究几个VUE/REACT
VUE的响应式原理中的Object.defineProperty有什么缺陷?

- proxy可以代理整个对象 defineProperty 每个属性单独代理

- 在vue2.0中,defineProperty并没有对数组提供完全的数据劫持
  有一个前端性能的坑, n  empty object  数组，会进入到死循环中。  push pop 常用的方法 

1. Object.defineProperty 无法监控到数组下标的变化(vue对push常用操作,defineProperty)不能实时响应
2. Object.defineProperty只能劫持对象的属性,proxy 可以代理(劫持)整个对象,并返回一个新的对象
3. proxy不仅可以代理对象,还可以代理数组.

- vue 2.0 数组没有下标支持变化  push  pop  ?
