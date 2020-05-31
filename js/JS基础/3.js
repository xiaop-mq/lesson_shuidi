// JS基本数据 类型
// 1. number
let n = 10;
n = 10.5;
n = -10;
n = 0;
n = NaN; // NAN not a number
n = Infinity; // 正/负无穷大

// 2. string:基于单引号，双引号，反引号(``)都是字符串
let str = '';
str = '19';
str = "好好学习";
str = `我的ES6中新增的模板字符串，有利于字符串的拼接`
str = '[object Object]'

// 3. boolean 
let boo = true;
boo = false;

// 4. null
let nu = null;
nu = undefined;
let un;

// 5. symbol: 每一个symbol都是一个唯一值
let x = Symbol('珠峰');
let y = Symbol('珠峰');
console.log(x == y); // false

// object普通对象
let obj = {
    name:'好好学习',
    age:10,
    teachers:30
};

// array数组对象
let arr = [10,'字符串',true,null];

// RegExp
let reg = /[a-z]/

// function函数
function func(x,y){
    let total = x + y;
    return total;
}

// es6箭头函数
let fn = () => {

}
