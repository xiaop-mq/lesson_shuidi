// indexOf检测方式
// 去创建一个新数组，遍历原数组，如果新数组中没有那一项的话，
// 就将其push进去。
let arr = [1, 2, 1, 3, 3, 2, 3]
let newArray = [];

for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    if(newArray.indexOf(item) == -1) {
        newArray.push(item);
    }
}
arr = newArray;
console.log(arr);

// 缺点：indexOf低版本浏览器不兼容