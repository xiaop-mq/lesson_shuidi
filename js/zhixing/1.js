// 变量提升

var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo(); // foo2


// 函数提升

function foo() {

    console.log('foo1');

}

foo();  // foo2

function foo() {

    console.log('foo2');

}

foo(); // foo2

// 为什么？
// 因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行
// 当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。
// 这个“一段一段”中的“段”究竟是怎么划分的呢？

function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();


// 当执行一个函数的时候，就会创建一个执行上下文，
// 并且压入执行上下文栈，当函数执行完毕的时候，
// 就会将函数的执行上下文从栈中弹出。
// 知道了这样的工作原理，让我们来看看如何处理上面这段代码：


