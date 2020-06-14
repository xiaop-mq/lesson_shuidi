// 作用2：克隆一个数组
// Array.from()可以很容易实现数组浅拷贝
// const numbers = [3, 6, 9];
// const numbersCopy = Array.from(numbers);

// numbers === numbersCopy; // false
// Array.from(numbers) 创建了对 numbers 数组的浅拷贝，
// numbers === numbersCopy 的结果是 false，
// 意味着虽然 numbers 和 numbersCopy 有着相同的项，
// 但是它们是不同的数组对象。 

// 创建数组 包括所有嵌套
function recursiveClone(val){
    return Array.isArray(val) ? Array.from(val,recursiveClone) : val;
}

const numbers = [[0, 1, 2],['one', 'two', 'three']];
const numbersClone = recursiveClone(numbers);

numbersClone; // => [[0, 1, 2], ['one', 'two', 'three']]
numbers === numbersClone[0]; // false