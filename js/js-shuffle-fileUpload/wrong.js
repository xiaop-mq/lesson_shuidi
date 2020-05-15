let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 算平均值就要算总和
// 伪随机 不满足随机数组
// 验证数组是不是真正的随机
function shuffle(arr) {
  // ? 乱序排序方法
  arr.sort(() => Math.random() - 0.5); // 随机生成[-0.5,0.5]的数字
  return arr;
}

let t = 10000;
for (let i = 0; i < t; i ++) {
  let sorted = shuffle(arr.slice(0));
  sorted.forEach((num, i) => {
    sum[i] = num + sum[i];// 乱序之后相加
  });
}
console.log(sum.map(n => n / t));  
arr.sort((a, b) => a - b);   // 升序
// 冒泡排序
let arr1 = [1, 2, 3, 4];
function bubble(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - i; j ++) {
      let k = j + 1;
      // sort 回调
      // 决定两个数字要不要交换
      // > 0  < 0
      // 随机 
      if (arr[j] < arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]]
      }
    }
  }
  console.log(arr);
}
bubble(arr1)

// arr.sort((a, b) => b - a);   // 
// () => Math.random() - 0.5 每次 又可能 > 0 下一次 < 0
// 
// sort(cb)
// cb 
// (a, b) 小于 0 ，那么 a 会被排列到 b 之前
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// a - b < 0
// 0 - 1 < 0
// b - a 1 - 0 > 0
// 大于 0 ， b 会被排列到 a 之前
// 1, 0 降序

