var longestConsecutive  = (nums) =>{
    const set = new Set(nums) // set存放数组的全部数字
    let max = 0 
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i] - 1)){ // nums[i]没有左邻居，是序列的起点
            let cur = nums[i]
            let count = 1
            while(set.has(cur+1)){ // cur有右邻居 cur+1
                cur++ // 更新
                count++
            }
            max = Math.max(max, count) // cur不再有右邻居，检查count是否最大
        }
    }
    return max
}