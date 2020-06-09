// 执行全局代码，创建全局执行上下文，
// 全局上下文被压入执行上下文栈
// 全局上下文初始化
var scope = "global scope"; 
// 初始化时，checkscope函数被创建
// 保存到作用域链到函数内部属性[[scope]]

// 执行 checkscope 函数，
// 创建 checkscope 函数执行上下文，
// checkscope 函数执行上下文被压入执行上下文栈

// checkscope 函数执行上下文初始化
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // local scope







var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
