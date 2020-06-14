// 作用1：类数组对象转成数组

// 函数参数求和
function sumArguments(){
    return Array.from(arguments).reduce((sum, sum) => sum + sum);
}
sumArguments(1, 2, 3); // 6

// array.from(arguments)将类数组对象arguments
// 转换成一个数组，然后使用数组的reduce求和

// array.from()第一个参数可以是任何可迭代的对象
Array.from('Hey'); // => ['H', 'e', 'y']
Array.from(new Set(['one', 'two'])); //['one', 'two']

const map = new Map();
map.set('one', 1);
map.set('two', 2);
Array.from(map); // [['one', 1], ['two', 2]]