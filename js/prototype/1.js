// function foo() {
//     function bar() {
//         ...
//     }
// }
// 函数创建时,各自的scope为：
// foo.[[scope]] = [
//     globalContext.VO
//   ];
  
//   bar.[[scope]] = [
//       fooContext.AO,
//       globalContext.VO
//   ];
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();

// 执行过程如下：

// 1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]

// checkscope.[[scope]] = [
//     globalContext.VO
// ];
// 2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈

// ECStack = [
//     checkscopeContext,
//     globalContext
// ];
// 3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链

// checkscopeContext = {
//     Scope: checkscope.[[scope]],
// }
// 4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: undefined
//     }
// }复制代码5.第三步：将活动对象压入 checkscope 作用域链顶端
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: undefined
//     },
//     Scope: [AO, [[Scope]]]
// }复制代码6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: 'local scope'
//     },
//     Scope: [AO, [[Scope]]]
// }复制代码7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
// ECStack = [
//     globalContext
// ];

