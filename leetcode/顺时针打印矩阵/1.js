
var spiralOrder = function(matrix) {
    let res = []
    let i = 0, j = 0
    while(matrix[i] && matrix[i][j] !== undefined){
      while(matrix[i] && matrix[i][j + 1] !== undefined){     // 右
        res.push(matrix[i][j])
        matrix[i][j] = undefined
        j++
      }
      while(matrix[i + 1] && matrix[i + 1][j] !== undefined){ // 下
        res.push(matrix[i][j])
        matrix[i][j] = undefined
        i++
      }
      while(matrix[i] &&　matrix[i][j - 1] !== undefined){    // 左
        res.push(matrix[i][j])
        matrix[i][j] = undefined
        j--
      }
      while(matrix[i - 1] && matrix[i - 1][j] !== undefined){ // 上
        res.push(matrix[i][j])
        matrix[i][j] = undefined
        i--
      }
      res.push(matrix[i][j])
      matrix[i][j] = undefined
      if(matrix[i] && matrix[i][j + 1] !== undefined){              // 右
        j++
      } else if (matrix[i + 1] && matrix[i + 1][j] !== undefined) { // 下
        i++
      } else if (matrix[i] &&　matrix[i][j - 1] !== undefined){     // 左
        j--
      } else if (matrix[i - 1] && matrix[i - 1][j] !== undefined){  // 上
        i--
      }
    }
    return res
  };
  
 