// 动态规划
// 动态规划思想核心：记住求过的解。
// 记住求解的方式有两种：
// 1. 自顶向下记录法
// 2. 自底向下


// 1. 状态定义
// dp[i,j]:字符串s从索引i到j的子串是否为回文串
// 返回true/false
// 2. 转移方程
// db[i][j] = dp[i+1][j-1]&&s[i] == s[j]
// s[i]==s[j]:说明当前中心可以继续扩张,进而有可能扩大回文串的长度
// dp[i+1][j-1]:true
// 说明s[i][j]的子串s[i+1][j-1]也是回文串
// 说明i是从最大值开始便利的,j是从最小值开始遍历的.
// 3. 特殊情况
// j-i<2:意思即为子串是一个长度为0或1的回文串
// 总结:
// dp[i][j] = s[i] = s[j] && (dp[i+1][j-1] || j-i<2)

var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(0));
    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    return res;
};



