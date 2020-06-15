// 1. 防抖:触发高频事件后n秒内会执行一次,
// 那么在n秒内高频事件再次触发,则重新计算时间
// 思路: 每次触发事件时都取消之前的延时调用的方法
function debounce(fn){
    let timeout = null; // 创建一个标记来存放定时器的返回值
    return function(){
        clearTimeout(timeout); // 每当用户输入的时候把前一个setTimeout clear掉
        timeout = setTimeout(() =>{
            fn.apply(this.arguments);
        }, 500)
    };
}
function sayHi(){
    console.log('防抖成功');
}
var inp = document.getElementById('inp');
inp.addEventListener('input',debounce(sayHi)); // 防抖