'use strict'//严格指向undefined

var foo = {
    value: 1
}

function bar(){
    // 如果this指向的是foo，打印就有意义
    console.log(this);
    console.log(this.value);
}

//.call手动指定函数内部的this,指向第一个参数
bar.call(foo);
// console.log(foo.value);
bar(); //this跟函数的运行方式相关
//是一个普普通通的函数 函数内部的this指向全局 在node 之中就是globle 浏览器中是window