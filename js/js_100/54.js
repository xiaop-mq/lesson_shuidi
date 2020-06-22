// 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
// 时间复杂度n^2
// 生成从l到r的数量为n的随机数组
function randomArr (n, l, r) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let _random = Math.round(l + Math.random() * (r - l));
        arr.push(_random)
    } 
    return arr;
}
function buddleSort (arr) {
    let len = arr.length;
    for (let i = len;  i >= 2;  i-- ) {
        for (let j = 0;  j < i - 1;  j++) {
             if (arr[j] > arr[j+1]) {
                  [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
             }
        }
    }
    return arr;
}
console.log(buddleSort(randomArr(10, 5, 100)));