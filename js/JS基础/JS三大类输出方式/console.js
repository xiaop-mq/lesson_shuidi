// console:控制台输出类
// 1.console.log 
// 定义:控制台输出
// 特点：输出数据类型的数据，控制台展示的也是对应的数据类型
let aa = {name:'xiaop',age:18}
let bb = {name:'panda',age:33}
console.log(aa,bb);
console.log({
    name:'xiaop',
    age:'18'
})
// 2. console.dir
// 定义：输出一个对象或者一个值的详细信息
let aa = {name:'xiaop',age:18}
console.dir(aa)
console.log({
    name:'xiaop',
    age:'18'
})
// 与console.log区别：console.log可以一次性输出多个值
// 3.console.warn
// 定义：以警告的方式输出
// 4.console.table
// 定义：把多维的JSON数据以表格的形式输出
// console.time/console.timeEnd
// 定义：计算程序消耗时间
console.time('AA');
for (let i = 0; i < 99999999; i++) {}
console.timeEnd('AA');