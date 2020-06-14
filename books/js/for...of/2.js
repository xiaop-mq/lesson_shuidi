// 类数组迭代
function sum(){
    let sum = 0;
    for(const number of arguments){
        sum += number;
    }
    return sum;
}
sum(1, 2, 3)

// 字符串迭代
// js的基础类型string是可迭代的 因此可以轻松的遍历字符串字符
const message = 'hello';

for(const character of message){
    console.log(character);
}
// 'h' 'e' 'l' 'l' 'o'


// map和set迭代
// map是一个特殊对象,将键与值相关联.
const names = new Map();
names.set(1, 'one');
names.set(2, 'two');

for (const [number, name] of names) {
  console.log(number, name);
}
// logs 1, 'one'
// logs 2, 'two'
