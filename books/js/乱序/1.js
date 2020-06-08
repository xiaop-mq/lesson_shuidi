var values = [1, 2, 3, 4, 5]

values.sort(function(){
    return Math.random() - 0.5
});

console.log(values);

// return Math.random() - 0.5
// 随机得到一个正数、负数、或是0，
// 如果是正数则降序排列，如果是负数则升序排列，
// 如果是0就不变，然后不断地升序降序，
// 最后得到一个乱序的数组。

// 效果不好
var times = [0, 0, 0, 0, 0];

for(var i = 0; i < 10000; i++){

    let arr = [1, 2, 3, 4, 5];

    arr.sort(() => Math.random - 0.5);

    times[arr[4] - 1]++;
}

console.log(times)