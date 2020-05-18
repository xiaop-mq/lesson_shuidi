// 暴力解法
var maxProduct = function(nums){
    let max = nums[0];
    let temp = null;
    for(let i = 0; i < nums.length; i++){
        temp = nums[i];
        for(let j = 0; j< nums.length; j++){
            temp *= nums[j];
            max = Math.max(temp,max);
        }
    }
    return max;
};


var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];

    for(let i = 1; i < nums.length; i++){
        let tmp = min;
        min = Math.min(nums[i],Math.min(max * nums[i],min * nums[i]));
        max = Math.max(nums[i],Math.max(max * nums[i],tmp * nums[i]));
        res = Math.max(res,max);
    }
    return res;
}