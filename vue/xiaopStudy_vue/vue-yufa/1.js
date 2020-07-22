// 命令式
// 使用for循环拿出每一项，然后计算完成在放入另一项中
var arrNew = [];
for(var i = 0; i < arr.length; i++){
    arrNew.push(arr[i]*2);
}

// 声明式
// 使用es6的map方法
// 将原数组arr中利用map 函数，传入每一项
var arrNew = arr.map(function(item){
    return item*2
})
