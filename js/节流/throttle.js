/**
 * 第一版 使用时间戳
 */

// var count = 1;
// var container = document.getElementById('container');

// function getUserAction() {
//     container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 1000);

// function throttle(func, wait) {
//     var context, args;
//     var previous = 0;

//     return function() {
//         var now = +new Date();
//         context = this;
//         args = arguments;
//         if (now - previous > wait) {
//             func.apply(context, args);
//             previous = now;
//         }
//     }
// }

/**
 * 第二版 使用定时器
 */
// var count = 1;
// var container = document.getElementById('container');

// function getUserAction() {
//     container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 3000);

// function throttle(func, wait) {
//     var timeout;

//     return function() {
//         var context = this;
//         var args = arguments;
//         if (!timeout) {
//             timeout = setTimeout(function(){
//                 timeout = null;
//                 func.apply(context, args)
//             }, wait)
//         }
//     }
// }


/**
 * 第三版 有头有尾
 */
// var count = 1;
// var container = document.getElementById('container');

// function getUserAction() {
//     container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 3000);

// function throttle(func, wait) {
//     var timeout, context, args, result;
//     var previous = 0;

//     var later = function() {
//         previous = +new Date();
//         timeout = null;
//         func.apply(context, args)
//     };

//     var throttled = function() {
//         var now = +new Date();
//         //下次触发func剩余的时间
//         var remaining = wait - (now - previous);
//         context = this;
//         args = arguments;
//          // 如果没有剩余的时间了或者你改了系统时间
//         if (remaining <= 0 || remaining > wait) {
//             if (timeout) {
//                 clearTimeout(timeout);
//                 timeout = null;
//             }
//             previous = now;
//             func.apply(context, args);
//         } else if (!timeout) {
//             timeout = setTimeout(later, remaining);
//         }
//     };


//     return throttled;
// }

/**
 * 第四版 有头无尾 或者 无头有尾
 * leading：false 表示禁用第一次执行
 * trailing: false 表示禁用停止触发的回调
 */

// var count = 1;
// var container = document.getElementById('container');

// function getUserAction() {
//     container.innerHTML = count++;
// };

// // container.onmousemove = throttle(getUserAction, 3000, {
// // 	leading: false
// // });

// container.onmousemove = throttle(getUserAction, 3000, {
//     trailing: false
// });

// function throttle(func, wait, options) {
//     var timeout, context, args, result;
//     var previous = 0;
//     if (!options) options = {};

//     var later = function() {
//         previous = options.leading === false ? 0 : new Date().getTime();
//         timeout = null;
//         func.apply(context, args);
//         if (!timeout) context = args = null;
//     };

//     var throttled = function() {
//         var now = new Date().getTime();
//         if (!previous && options.leading === false) previous = now;
//         var remaining = wait - (now - previous);
//         context = this;
//         args = arguments;
//         if (remaining <= 0 || remaining > wait) {
//             if (timeout) {
//                 clearTimeout(timeout);
//                 timeout = null;
//             }
//             previous = now;
//             func.apply(context, args);
//             if (!timeout) context = args = null;
//         } else if (!timeout && options.trailing !== false) {
//             timeout = setTimeout(later, remaining);
//         }
//     };

//     return throttled;
// }


/**
 * 第五版 添加取消方法 用法跟 debounce 相同
 */

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

var setUseAction = throttle(getUserAction, 10000);

container.onmousemove = setUseAction

document.getElementById("button").addEventListener('click', function(){
    setUseAction.cancel();
})

function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };

    return throttled;
}