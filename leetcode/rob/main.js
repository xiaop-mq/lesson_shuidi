var rob = function(nums) {
    var dp = [];//动态规划数组 dynamic protocal
    dp[0] = 0;//
    dp[1] = 0;
    for (let i = 2; i < nums.length + 2; i++){
        dp[i] = Math.max(dp[i-2] + nums[i-2],dp[i-1]);
        // 最大的数字加上它相邻数字和前面的大数字比较
    }
    console.log(dp);
    return dp[nums.length + 1];
}

console.log(rob([2,7,9,3,1]));//12