// 把“|”变成“，”分隔符
let str = "music|movie|eat|sport";
let ary = str.split('|');
// 先利用split把字符串按|分隔
res = ary.join(',');
// 利用join再转回字符串
console.log(res);