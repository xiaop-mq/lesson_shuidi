// 在一定时间内，重复触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次
// 如果再设定时间来临之前，又一次出发了事件，就开始延时。

// 假设持续触发scroll事件时，并不执行handle函数
// 当1000毫秒内没有触发scroll事件时，才会延迟触发scroll事件
function debounce(fn, wait) {
    var timeout = null;
    return function(){
        if(timeout !== null){
            clearTimeout(timeout);
            timeout = setTimeout(fn, wait)
        }
    }
}
// 处理函数
function handle() {
    console.log(Math.random())
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
