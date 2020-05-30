// 下面代码中a,什么情况下会打印1?4
// == 判断  === 恒等 隐式类型转换 1 + "2"
// 显示类型转换 Number("123")
// 原始数据类型和复杂数据类型
// var a = {
//     i: 1,
//     toString(){
//         console.log('------string')
//         return a.i++;
//     }
// }; // 简单数据类型是不可能的
// a 是变化的 对象
// var a = {
//     num: 0
// };
// a.valueOf = function(){
//     console.log('valueof-----------')
//     return ++a.num;
// }

// let a = {
//     gn:(function* (){
//         yield 1; // yield 后面的值就是返回值
//         yield 2;
//         yield 3;
//     })(),
//     valueOf(){
//         return this.gn.next().value;
//     }
// }

Object.defineProperties(window, 'a', {
    get: function () {
        return this.value += 1;
    }
})

if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
// generator next
// 还有别的方法? es6里面有哪个概念可以让我们的值来三段锦