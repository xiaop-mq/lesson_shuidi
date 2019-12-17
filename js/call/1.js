'use strict';

var foo = {
    value: 1 ,
    bar:function(){
        console.log(this.value);
    }
}
foo.bar();

const bar1 = foo.bar//bar1是一个函数体 运行时就是函数 调用是是普通函数指向全局的groble
console.log(bar1());
