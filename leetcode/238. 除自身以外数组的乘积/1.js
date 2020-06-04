// var productExceptSelf = (nums) => {
//     const N = nums.length
//     const left_output = [] //存放左边乘积
//     const right_output = [] // 存放右边乘积
//     const output = [] // 结果数组
//     left_output[0] = 1 // nums第一项没有左边项，初始化为1
//     right_output[N-1] = 1 // nums数组最右项没有右边项，初始化为1
//     for(let i = 1; i < N.length; i++) { // 遍历求出每个元素的左边元素之积
//         left_output[i] = left_output[i-1]*nums[i-1] // 累乘一项即可
//     }
//     for(let i = N - 2; i >= 0; i--){
//         right_output[i] = right_output[i - 1] * nums[i + 1] // 累乘一项即可
//     }
//     for (let i = 0; i < N; i++) { // 遍历求出output[i]
//         output[i] = left_output[i] * right_output[i]
//     }
//     return output;
// }

// 空间优化：怎么存左边积和右边积更好？
// 利用好output数组空间，并引入遍历保存右边积

// 优化后
var productExceptSelf = (nums) => {
    const N = nums.length
    const output = []
    output[0] = 1
    for(let i = 1; i < N; i++){ // output[i]是nums[i]的左边积
        output[i] = output[i - 1] * nums[i - 1]
    }
    let right_output = 1 // 依然保存nums[i]的左边积
    for(let i = N - 1; i >= 0; i--){
        output[i] *= right_output // 左边积乘上右边积
        right_output *= nums[i] // 更新右边积
    }
    return output;
}