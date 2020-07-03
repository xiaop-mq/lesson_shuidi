// 打印出1-10000之间所有的对称数字 121 1331
[...Array(10000).keys()].filter((x) => {
    return x.toString().length > 1 && x === Number(x.toString().split('').reverse().join(''))
})