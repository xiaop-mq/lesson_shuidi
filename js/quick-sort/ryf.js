// 阮一峰版快排！

const arr = [0,1,9,8,4];

// 一次快排 能够给一个
// 基准值 let provit = 
// k  数组的索引
// 快排特点：1.provit 找到正确的位置(数组里面的索引) !!!小算法  partition 分区
// 2. 左边 小于 provit 的数 < 右边 大于 provit 的数
// 原地交换数组里面的两个数据
const quickSort = function(arr){
    if(arr.length <= 1) return arr;
    let provit = arr[0]; // 基准值
    let left = [], right = [];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < provit) left.push(arr[i]);
        if(arr[i] > provit) right.push(arr[i]);
    }
    return [...(quickSort(left)), provit, ...(quickSort(right))]
}
console.log(quickSort(arr));