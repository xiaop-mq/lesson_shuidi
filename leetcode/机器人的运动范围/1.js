/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    if (m === 0 || n === 0) return 0;
    
    let count = 0, dp = new Array(m);
    for (let i = 0; i < m; i++) dp[i] = new Array(n);
    
    const calculateSum = (a, b) => {
      let x = String(a), y = String(b), sum = 0;
      for (let i = 0; i < x.length; i++) sum += (+ x.charAt(i));
      for (let i = 0; i < y.length; i++) sum += (+ y.charAt(i));
      return sum;
    }
    
    // 初始化第一个格子为可达 true
    dp[0][0] = true;
    count++;
    
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        let top = false, left = false;
        
        top = row - 1 < 0 ? top : dp[row - 1][col];
        left = col - 1 < 0 ? left : dp[row][col - 1];
        
        if ( (top || left) && calculateSum(row, col) <= k ) {
          count++;
          dp[row][col] = true;
        }
      }
    }
    
    return count;
  };