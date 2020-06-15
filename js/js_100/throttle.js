// 2. 节流
// 高频事件触发,在N秒内只会执行一次,所以节流会稀释函数的执行频率
function throttle(){
    let canRun = true // 通过闭包保存一个标记
    return function(){
        if(!canRun) return; // 在函数开头判断标记是否为true,不为true则return
        canRun = false; //  立即设置为false
        setTimeout(() => {
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true 标识可以执行下一次循环了
            // 当定时器没有被执行的时候永远是false,在开头就return掉
            canRun = true;
        }, 500)
    };
}
function sayHi(e){
    console.log(e.target.innerWidth,e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));