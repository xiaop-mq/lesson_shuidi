// 双FOR方式：一次遍历数组的每一项，拿到当前项和后面的向比较
// 如果后面又和他相同的,则说明这是重复的,我们把后面的重复项删除即可/
let arr = [1, 1, 1, 2, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 2, 3];

for(let i = 0; i < arr.length - 1; i++){
    let item = arr[i];
    for(let j = i + 1; j < arr.length; j++){
        if(item === arr[j]){
            // 当前项和后面中的某一项相等了
            // 此时我们把后面中的这一项从原始数组中删除掉
            arr.splice(j, 1);
            j--;
        }
    }
}
// 用splice删除需要注意两点
// 数组塌陷问题
// 性能优化

// 优化后代码如下
let arr = [1, 1, 1, 2, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 2, 3];

for(let i = 0; i < arr.length - 1; i++){
    let item = arr[i];
    for(let j = i + 1; j < arr.length; j++){
        if(item === arr[j]){
            arr[j] = arr[arr.length - 1];
            arr.length --;
            j--;
        }
    }
}
console.log(arr);
