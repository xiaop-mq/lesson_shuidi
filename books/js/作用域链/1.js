// function foo(){
//     function bar() {
//         ...
//     }
// }

// 函数创建时，各自的[[scope]]为
// foo.[[scope]] = [
//     globalContext.VO
// ]
// bar.[[scope]] = [
//     fooContext.AO
//     globalContext.VO
// ]

// 函数执行上下文中作用域链和变量对象的创建过程
var scope = "global scope"
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();