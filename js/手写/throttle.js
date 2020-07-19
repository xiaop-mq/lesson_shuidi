// 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
// 水龙头放水：需要按照规定时间内一滴一滴往下滴。

// 时间戳
var throttle = function(func, delay) {
    var prev = Date.now();
    return function(){
        var context = this;
        var args = arguments;
        var now = Date.now();
        if(now - prev >= delay){
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
function handle(){
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));