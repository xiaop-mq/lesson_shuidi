// 时间复杂度O(n),hash表最多存放K个数，时间复杂度O(k)

var subarrayDivByK = (A, K) =>{
    let map = { 0: 1 }  // 为了让边界情况也能适用通式
    let preSum = 0; // 提供累加，初始值为0
    let count = 0; // 计数器
    for(let i = 0; i < A.length; i++){ // 一次遍历做完所有的事情
        preSum = (preSum + A[i]) % K // 前缀和累加上次而得，在mod
         if (preSum < 0) preSum += K // 因为负数取模还是负数，所以需要加K
         if(map[preSum]){ // 之前存过与当前preSum相同的key
             count += map[preSum] // 把对应的值(出现次数)累加给count
         }
         if(map[preSum]){ // 以前存过，出现次数+1
             map[preSum]++
         }else{ // 新存入初始值为1
             map[preSum] = 1
         }
    }
    return count  // 返回计数结果
}