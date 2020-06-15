// 用js写一个函数，输入Int型，返回整数逆序后的字符串
// 输入1234 返回4321
// 要求必须使用递归函数调用，不能用全局变量
// 输入函数必须只有一个参数传入,必须返回字符串
function fun(num){
    let num1 = num / 10;
    let num2 = num % 10;
    if(num1 < 1){
        return num;
    } else {
        num1 = Math.floor(num1)
        return `${num2}${fun(num1)}`
    }
}
var a = fun(12345)
console.log(a)
console.log(typeof a)