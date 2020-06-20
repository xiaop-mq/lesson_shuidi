// 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果 
var arr = [3, 15, 8, 9, 29, 102, 22];
arr.sort(function(a, b){
    return a - b;
})
console.log(arr)