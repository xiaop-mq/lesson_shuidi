// 旋转数组算法题
// 因为移动步数可能大于数组长度，所以要先取余
function roate(arr, k) {
    const len = arr.length // 定义数组的长度
    const step = k % len // 移动步数长度可能大于数组长度，所以求余
    return arr.slice(-step).concat(arr, slice(0, len - step))
}

// vue的父组件和子组件生命周期构造执行顺序？
// 1. 加载渲染过程 
// 父：beforeCreate -> 父：created -> 父：beforeMount
// -> 子: beforeCreate -> 子：created ->子：beforeMount
// -> 子：mounted -> 父：mounted

// 2. 子组件更新过程 
// 父beforeUpdate->子beforeUpdate->子updated->父updated

// 3. 父组件更新过程 
// 父beforeUpdate->父updated

// 4. 销毁过程 
// 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed