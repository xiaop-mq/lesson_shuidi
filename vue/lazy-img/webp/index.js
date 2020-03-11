// https://www.npmjs.com/package/webp-converter 详细讲解
// webp 文件转换详细步骤
// const webp = require('webp-converter'); // 引入组件
// webp.cwebp("test.jpg", "test.webp", "-q 80", // 需要转换的文件 转换文件比例
//  function(status, error) {
//   console.log(status, error);
// })

// 原图 10% 左右轮廓 ， lazyload 加载完成后 替换上去
// img  src  ->  loading.gif logo 
const lqip = require('lqip'); 
const file = './in.png';
lqip
  .base64(file)
  .then(res => {
    console.log(res);
  });