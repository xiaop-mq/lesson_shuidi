// bar 函数运行 并且内部的this指向foo
// bar.call 函数即对象，
// Function.prototype.call
// bar.call(foo)
//任何函数都具有prototype属性
'use strict'
Function.prototype.call2 = function(context) {
    // context={value:1}
    // this();
    context.fn = this;
    context.fn();
    // func???  是this
    // console.log('手动模拟call的功能');
    // console.log(context);
    // 1.把原来的函数执行1下
    // 2.并且他内部的指针指向context

}
function func(){
    console.log(this.value);

}
var foo = 
{
    value:1
}
func.call2(foo);