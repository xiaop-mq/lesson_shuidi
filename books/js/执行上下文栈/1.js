function fun3(){
    console.log('fun3');
}
function func2(){
    fun3();
}
function fun1(){
    fun2();
}

fun1();

// 执行函数时，创建执行上下文，并且压入执行上下文栈，
// 当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

// 伪代码

// fun1()
// ECStack.push(<fun1> functionContext);

// // fun1中竟然调用了fun2，还要创建fun2的执行上下文
// ECStack.push(<fun2> functionContext);

// // 擦，fun2还调用了fun3！
// ECStack.push(<fun3> functionContext);

// // fun3执行完毕
// ECStack.pop();

// // fun2执行完毕
// ECStack.pop();

// // fun1执行完毕
// ECStack.pop();

