item['xiaozhima'] = '小芝麻';
// console.dir(item.xiaozhima);
// console.dir(item)
//这里我们只打印item查看这个对象的属性

item.setAttribute('jinse', '金色');
// console.dir(item.getAttribute('jinse'));

console.log(item.xiaozhima); //=>'小芝麻'
console.log(item.getAttribute('xiaozhima')); //=>null

console.log(item.jinse); //=>undefined
console.log(item.getAttribute('jinse')); //=>'金色'
