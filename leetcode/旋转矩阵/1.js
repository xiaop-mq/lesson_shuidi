var rotate = function(matrix) {
    // 定义一个长度等于矩阵长度
    const len = matrix.length;
    // 先挨个push到每行末尾，再每行splice掉前面多出来的，不知道这样算不算“在原来的矩阵上修改”。
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j < len; j++) {
            matrix[j].push(matrix[i][j]);
        }
    }
    for (let i = 0; i < len; i++) {
        matrix[i].splice(0, len);
    }
    // console.log(matrix);
};

