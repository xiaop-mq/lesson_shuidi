## JS循环:for循环

1. for 循环
- 作用: 一轮一轮的重复做某件事
- 项目中的使用情况: 
  循环一个集合或者控制循环处理次数,每一轮循环都控制相关的事情执行一遍.
- 语法:
for(设置初始值;设置循环执行的条件,控制循环次数;每一轮循环结束后处理的事情[步长累加]){
	//=>循环体（每一轮循环要做的事情）		 
}
- 操作步骤
1、设置初始值
2、验证条件（条件不成立循环结束）
3、循环体
4、步长累加
5、再次验证条件
6、循环体

## 循环中可能出现的两个关键字:break conitnue
1. break
强制结束整个循环;循环体中一旦遇到break,整个循环都结束了,break下面的代码不在执行,步长累计也不在执行.
2. continue
结束本轮循环,下轮继续;
循环体中一旦遇到continue ，本轮循环结束，continue 下面代码不在执行，但是步长累计会执行

## for循环和for in的区别
1. for循环应用
遍历数组的每一项:因为数组有索引和length属性,所以我们能够知道循环次数也能基于索引获取对应项,使用for循环就可以解决.

2. for in 循环
- 遍历对象中的每一个属性: 我们无法直接获取到对象中有多少个属性(ES6中的object.keys除外),也就无法知道循环多少次,所以无法使用FOR循环;真实项目中遍历对象我们基于FOR IN循环;
- 语法:
for(var key in obj){...}
创建变量 in 对象
当前对象中有多少个可枚举的属性,就能循环多少次;
key变量存储的是每一次循环的属性名;
```js
var obj = {
	name: '小明',
	age: 18,
	address: '北京市'
};
for (var key in obj) {
	console.log(`本轮循环，属性名：${key}，属性值：${obj[key]}`);
}
```
- 注意:
  FOR IN遍历的时候,是优先按照从小到大的机制变量数字属性的

```js
  var obj = {
	name: '小明',
	age: 10,
	10: 100,
	0: 10
};
for (var key in obj) {
	// 0 10 name age
	console.log(`本轮循环，属性名：${key}，属性值：${obj[key]}`);
}
 ```