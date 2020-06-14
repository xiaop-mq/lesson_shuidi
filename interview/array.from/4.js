// 作用4: 生成数字范围
function range(end) {
    return Array.from({ length }, (_, index) => index);
}
range(4) // [0, 1, 2, 3]

// 作用5: 数组去重
// Array.from()传入的参数是可迭代对象，
// 可以结合set来实现快速删除数组的重复项
function unique(array){
    return Array.from(new Set(array));
}
unique([1, 1, 2, 3, 3]) // [1, 2, 3]