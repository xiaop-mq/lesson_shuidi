let obj = {
    // 键值对描述对象特征
    name: 'xiaop',
    age: 22,
    sex: '女',
    score: [100, 98, 89],
    fn: function () {
        
    }
}
console.log(obj);


let obj = {
    1:100
}
console.log(obj[1]);
// console.log(obj.1); // uncaught syntaxerror: missing ) after argument list
// 基于点的操作方式有自己的局限性，属性名不能是数字，只能用 对象[对象属性]

console.log(obj[1]);
console.log(obj['1']); // 其他非字符串格式作为属性名和字符串格式没啥区别

obj.n = 200; //=> {n:200}  n是属性名（数据格式是字符串）
obj['n'] = 200; //=> {n:200} 和上面的情况一样


obj[n] = 200; //=> {100:200} => obj[100]=200   
// n本身是一个变量（n和'n'的区别：前者是一个变量，后者是一个字符串的值），它代表的是所存储的值100（是一个数字格式）

obj[m] = 200; //=>Uncaught ReferenceError: m is not defined 
// m这个变量没有被定义

obj[true] = 300; //=>{true:300}
obj[undefined] = 400; //=>{undefined:400}

console.log(obj);

// 获得所有属性名-object.keys(对象)：返回结果是包含所有属性名的数组
let obj = {
    sex: 0
}
// 获取指定属性名的属性值
console.log(obj.sex); // 0
console.log(obj['sex']); // 0

// 如果指定的属性名不存在，获取到的值就是undefined
console.log(obj['age']);

// 获取当前对象所有的属性名：返回结果是包含所有属性名的数组
console.log(Object.keys(obj)); // ["sex"]

// 增加/修改
// 对象的属性名(键)是不允许重复的
// 之前没有这个属性名则为新增;有这个属性名,则修改对应的属性值

let obj = {
    sex: 0
}

obj.name = '张三' // 新增
obj['name'] = "李四" // 修改


// 删除操作
// 真删除:彻底把属性从对象中移除 delete obj.name
// 假删除:当前属性还在,只不过属性值为空 obj.name = null


// 引用数据类型不能作为属性名
let n = {
    x: 100
};
let m = [100, 200];
let obj = {};
obj[n] = "张三" //=>obj[{x:100}] 但是对象不能作为属性名，需要把其转换为字符串 =>{"[object Object]":"张三" }
obj[m] = "李四"  //=>obj[[100,200]] =>{ "100,200":"李四" }
console.log(obj)
// 如果非要属性名是对象,只能基于ES6中的新数据结构Map处理

// 数组相对于对象的特点
// 数组是特殊的对象
// 1.它的属性名是数字,数字从零开始,逐级递增,每一个数字代表着当前项的位置 => 我们把这个叫做索引
// 2.默认有一个length属性存储数组的长度
let arr = [10, 20, 30];
console.log(arr[0], arr[1], arr[2]);
console.log(arr.length);
console.log(arr['length'])
