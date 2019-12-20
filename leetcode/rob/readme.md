 [1,2,3,1]
 ? 不能相邻的偷
 最多的钱？
 4
 1 如果偷
 2 不能偷
 3 或 1
     ABCD   动态规划算法
     选择A   不选择A 
     CD    BCD

     每个位置中最大的决策是这样的
     i =0  Math.max(,)?
     nums[1,2,3,1]
     dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1])

