// parseInt callback  map  item(每一项) index(下标),arr 数组本身
//  1   2   3   1  NaN  NaN
// parseInt('1', 0) 10 进制  1
// parseInt('2', 1)  1       2 not a number
// parseInt('3', 2)  2       3 not a number

// console.log(['1', '2', '3'].map(parseInt))


// 有什么需求?  JS 的函数化能力 parseInt() 
// 如何确保函数在运行时,只接受一个参数  控制函数参数数量的能力
// ['1','2','3'] [1, 2, 3]

// 将数组中的字符串转化为整数
// unary:创建一个只接受一个参数的函数,忽略任何其他的参数
// 调用提供的函数fn，只传入一个参数。
let unary = fn => val => fn(val); /* fn就是unary */
let parse = unary(parseInt);
console.log(['1','2','3'].map(parse));