## 增删改(此类均改变原数组)

1. push 
- 定义：向数组末尾追加元素
- @params: 追加的项
- @return: 新增数组长度
- 是否改变原数组： 改变

使用方法：arr.push(增加的项)
```js
var ary = [1, 2, 3];
var res = ary.push(6); // 长度为4
console.log(ary); // [1, 2, 3, 6]
```

2. unshift
- 定义：向数组的开头增加元素
- @params: 追加的项
- @return: 新增数组长度
- 是否改变原数组长度：改变

使用方法：ary.unshift(增加的项)
```js
var ary = [1, 2, 3];
var res = ary.unshift(6); // 长度4
console.log(ary); //[6, 1, 2, 3]
```

3. shift
- 定义: 删除数组的开头项
- @params: 无
- @return: 删除的那一项
- 是否改变原数组：改变

使用方法：ary.shift()
```js 
var ary = [1, 2, 3, 4, 5];
var res = ary.shift();
console.log(ary);
console.log(res); // 1
```

4. pop
- 定义：删除数组的结尾项
- @params: 无
- @return: 删除的那一项
- 是否改变原数组：改变

使用方法：ary.pop()
```js
var ary = [1, 2, 3, 4, 5];
var res = ary.pop();
console.log(ary);
console.log(res); // 5
```

5. splice
- 定义: 实现数组的增删改。
- @params: n , m , x
- @return: 修改后的数组
- 是否改变原数组：改变

使用方法：ary.splice(n , m , x)
```js
var ary = [1, 2, 3, 4, 5];
console.log(ary.splice(0, 2, 6, 8));
console.log(ary) // [6, 8, 3, 4, 5]
```
- 删除：返回值是一个数组，里面是删除项。
ary.splice(0): 可以清空数组，把原始数组的内容基于新数组存储起来(类似于克隆)
ary.splice(ary.length - 1): 删除最后一项
ary.splice(0, 1): 删除数组第一项
```js
var ary = [1, 2, 3, 4, 5]
console.log(ary.splice(0, 1));
console.log(ary) // [2, 3, 4, 5];
```

- 新增：ary.splice(n, 0, x): 在索引n的前面增加了x项
ary.slice(ary.length, 0, x): 在数组最后添加x项
ary.splice(0, 0, x):在数组开头增加x项
```js
var ary = [1, 2, 3, 4, 5]
console.log(ary.splice(0, 0, 8));
console.log(ary) // [8, 1, 2, 3, 4, 5]
```
6. 删除数组末尾一项的几种方法
- arr.length--
- arr.pop()
- arr.splice(arr.length-1)
- delete arr[arr.length - 1]

7. 向数组末尾增加项的几种方法
- arr.push()
- arr[arr.length] = 增加的项
- arr.slice(arr.length, 0, 增加的项)

## 拼接和查询(此类均不改变原数组)

1. slice:
- 定义： 实现数组的查询
- @params: n , m //从索引n开始，找到索引为m的地方(不包含m的地方)
- @return：把找到的内容以新数组的形式返回

使用方法arr.slice(n, m)
```js
var ary = [1, 2, 3, 4, 5]
var res = ary.slice(1, 3) // [2, 3]
```
> ary.slice(0): m不写是查找至末尾，相当于数组克隆

### 思考：如果n/m为负数会怎样？如果n < m会怎样，如果是小数会怎样，如果是非有效数字会怎样，如果m或者n的值比索引大会怎样？

- m/n为负数？
start: 负数从尾部算起，-1指最后一个，-2指倒数第二个，以此类推
end: 从字符串的尾部开始算起
- n > m: 会返回空数组
- n,m为小数： 只会取小数点前的整数，无论小数点后数字是几都直接忽略。
```js
let ary = [1, 8, 7, 3, 6, 4]
ary.slice(1.3, 4.2) // [8, 7, 3]
ary.slice(1.6, 4.9) // [8, 7, 3]
ary.slice(1, 4) //[8, 7, 3]
```
- 如果是非有效数字：会基于number转换为数字，在进行截取。
```js
let ary = [1, 8, 7, 3, 6, 4]

ary.slice("sss","sss") //[]
ary.slice("1","3") // [8, 7]
ary.slice(false,true);//==> [1]
ary.slice([],[4]);//==>[1, 8, 7, 3]
ary.slice({},{a:b});//==>Uncaught ReferenceError: b is not defined
ary.slice(NaN,2);//==> [1, 8]
```

- m或者n比最大索引值大会怎样?
n大于索引值时，返回值为空数组；
n小于索引值时，m大于索引值时，则返回索引值n知道末尾项
```js
ary.slice(8, 3) //[]
ary.slice(1, 8) // [8, 7, 3, 6, 4]
```

7. concat
- 定义：实现数组拼接(合并)
- @params: 拼接的项
- @return: 拼接后的数组
- 是否改变原数组：不改变

使用方法：ary.concat(拼接的内容)
```js
let ary1 = [10, 20, 30];
let ary2 = [40, 50, 60];
let res = ary1.concat("培训", ary2);
console.log(res); // [10, 20, 30, "培训", "40", "50", "60"]
```

## 把数组转换成字符串(此类不改变原数组)

1. toString
- 定义： 把数组转换成字符串
- @params: 无
- @return: 转换后的字符串，每一项用逗号分隔
- 是否改变原数组：不改变

使用方法：ary.toString()
```js
let ary = [10, 20, 30];
let res = ary.toString();
console.log(res); // "10","20","30"
console.log([].toString()); // ""
console.log([12].toString()); // "12"
```

2. join
- 定义：把数组转换为字符串
- @params：按指定的分隔符连接
- @return：转换后的字符串
- 是否改变新数组：不改变
使用方法：ary.join(‘指定分割符’)
```js
var ary = [1, 2, 3]
var res = ary.join("-");//"1-2-3"
```
- arr.join(")"123"
- arr.join():未指定分隔符，用逗号隔开
- arr.join('+)// 1+2+3
console.log(eval(res)) // 6; 将字符串变成JS表达式(加减乘除执行)

## 检测数组是否包含原数组
1. indexOf
- 定义：检测当前项在数组中第一次出现位置的索引值
- @params：要检索的这一项内容
- @return：这一项出现的位置索引值（数字），如果数组中没有这一项，返回的结果是-1
- 是否改变原数组：不改变

使用方法: ary.indexOf(检索的项)
```js
let ary = [10, 20, 30, 10, 20, 30]
console.log(ary.indexOf(20)) // 1
```
- 验证ARY种是否包含培训
```js
if（ary.indexOf("培训")===-1）{//不包含}

也可以直接使用ES6新提供的includes方法判断(不兼容)
if（ary.includes("培训")）{//包含:如果存在返回的是TRUE}
```

2. lastIndexOf
定义：检测当前项在数组中最后一次出现位置的索引值
其余内容通indexOf相同

3. includes
- 定义：检测当前数组是否包含某项
- @params:要检索的这一项内容
- @return:布尔，true 包含，false 代表不包含
- 是否改变原数组：不改变

ary.includes(检索的项)
```js
var ary = [1, 2, 3]
ary.includes(1); // true
```

## 排序或排列

1. reverse
- 定义：把数组倒过来排列
- @params：无
- @return：排列后的新数组
- 是否改变原数组：改变

使用方法：ary.reverse()
```js
var ary=[1,2,3,4,5];
var res=ary.reverse();==>[5,4,3,2,1];
console.log(res,ary);===>[5,4,3,2,1];
```

2. sort
- 定义：把数组按大小顺序排列
- @params：可以没有，也可以是函数
- @return：排好序后的数组
- 是否改变原数组：改变

使用方法：ary.sort()
a-b升序 b-a降序
- ary.sort(function(a, b){
    return a - b
})
- 箭头函数表示：ary.sort((a, b) =>{
    a - b
})
升序
```js
var ary = [11, 12, 1, 2, 3]
ary.sort(function(a, b){
    return a - b
})
```
降序
```js
var ary = [12, 11, 1, 2, 3]
ary.sort(function(a, b){
    return a - b;
})
```

## 遍历和映射
1. forEach
- 定义：遍历数组中的每一项内容
- @params：回调函数
- @return：无/undefined
- 是否改变原数组：不改变

使用方法ary.forEach(function(item, index){
    alert(item);
})
```js
var ary = [2,1,3,5,6,7,8,2];
var res = ary.forEach(function(item, index){
    alert(item);
})
console.log(res);
```
- ary.forEach((item, index) => {
    console.log('索引'+ index+ '内容' + item)
})

```js
ary.forEach((item,index)=>{
//数组中有多少项，函数就会被默认执行多少次
//每一次执行函数：item是数组中当前要操作的这一项，index是当前项的索引
console.log('索引：'+index+'内容：'+item)；
})

```
- 基于原生JS实现
```js
for（let i = 0；i<ary.length;i++）{
//i:当前循环这一项的索引
//ary[i]:根据索引获取循环的一项
console.log('索引：'+i+'内容：'+ary[i]);
}
```

2. map
- 定义：数组映射
- @params：回调函数
- @return：映射后的新数组
- 是否改变原数组：不改变
使用方法 ary.map(function(item, index){
    return "真棒"
})
```js
var ary = [2, 1, 3, 4]
var res = ary.map(function(item, index){
    return "你真棒"
})
["你真棒","你真棒","你真棒","你真棒"]
```



## reduce

1. 定义：接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减（是个数递减，不是值），最终计算为一个值。
一般用于求和；计数,本次返回的结果会作为下一次的上一次进行计算。

2. @params: callback,初始值
- callback(必须)：给数组中的每一个元素依次执行传入的回调函数，不包括数组中被删除或从未被赋值的元素；
   回调函数的形参： 
   - 初始值、当前元素值、当前索引、调用reduce数组
- 初始值(可选):作为第一次调用 callback函数时的第一个参数的值
如果没有提供初始值，则将使用数组中的第一个元素。
在没有初始值的空数组上调用 reduce 将报错。

3. @return 
函数处理器返回的结构

4. 不改变原数组。

5. 使用方法：
数组.reduce(callback(accumulator, currentValue, 【index, array】), 【initialValue】)

用【】表示可以省略