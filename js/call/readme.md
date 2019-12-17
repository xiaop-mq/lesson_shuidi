- this是由原则的，永远指向一个地方
 1. 作为普通函数被调用的时候，this指向window/groble(node/前端)
 'use strict'严格模式下 指向undifiend
 2. 当this方法作为对象的方法被调用是 this指向这个对象
 3. 被new的方式运行时，this指向实例化后的对象 

- call 手动指定函数运行时的this,并将函数运行
   写法:bar.call(foo) 函数运行
- bar.call (对象) 
 js语言中函数是对象
 手写一个call ? 
 