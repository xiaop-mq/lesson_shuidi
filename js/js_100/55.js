// 某公司 1 到 12 月份的销售额存在一个对象里面
// 如下：{1:222, 2:123, 5:888}，
// 请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
let data = {1: 222, 2: 123, 5: 888};
let arr = Array.from({length: 12}).map((it, i) => data[i+1]||null);
console.log(arr);