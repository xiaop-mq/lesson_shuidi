// MVVM  数据劫持
// vue3.0出来之后 proxy 替代了 defineProperty

// var arr = [1];
// arr[10000] = 1; // 新手会写
// arr  V8存储  数组在JS是对象
// 容器 V8  数字索引,字符串索引
// function a() {
//   console.time();

//   for (var i = 0; i < arr.length; i++) { // 耗时间 碰到代码久执行
//     console.log(1)
//   } // 需要非常的的性能
//   console.timeEnd();
// }


// a();

// function b() {
//     console.time();
//     arr.forEach(item => { console.log(2) }) // foreach拿到所有的key在循环
//     console.timeEnd();
//   }
// b();

// vue defineProperties 缺点:不支持数组的代理
// 对数组进行数据劫持
// defineProperties是可以对数组进行数据的劫持,不过对新增的数据项没有效果
var arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
    // defineProperties 对每一个属性进行单独的数据劫持, get, set,
    Object.defineProperty(arr, index, {
        set: function(val){
            console.log('set');
            item = val;
        },
        get: function(val) {
            console.log('get');
            return item;
        }
    })
})

arr[1];
arr[1] = 1;// 修改操作
// 1. 尝试让vue支持数组的mvvm能力, API
// arr[5] = 2;
// arr[1000] = 1000;
arr.push(5);