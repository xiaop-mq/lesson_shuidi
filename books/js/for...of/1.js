// 最常见：数组迭代
// 可以高效的完成迭代，而无需其它变量来保持索引
const products = ['oranges', 'apples'];
for(const product of products){
    console.log(products);
}
// 'oranges'
// 'apples'

// 1.1 就地解构
const persons = [
    { name: 'John Smith' },
    { name: 'Jane Doe' }
];
for(const { name } of persons){
    console.log(persons);
}
// 'John Smith'
// 'Jane Doe'