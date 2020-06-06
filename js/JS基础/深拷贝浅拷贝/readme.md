1. 浅拷贝
- 定义：
只把第一级拷贝一份，赋值给新的数组。(一般数组克隆的方法都是浅拷贝)
- 方法：
slice: 创建新数组，循环数组的每一项，将每一项复制给新的数组。
concat: 
扩展运算符：[...args]

2. 深拷贝
- 定义：
不仅把第一级拷贝给新的数组，如果原始数组存在多级，那是把每一级都拷贝一份赋值给新数组的每一个级别。

- 方法：

一、利用JSON数据格式
- 语法：
let arr2 = JSON.parse(JSON.stringfy(arr1));
- 实现原理：
JSON.stringfy(arr1):先把原始对象变为一个字符串
JSON.parse(...):再把字符串转换成新的对象，这样浏览器会重新开辟内存来存储信息。

二、自己封装
- 语法：
let arr2 = cloneDeep(arr1);

## 深比较和浅比较
```js
let obj1 = {
    name: '小芝麻',
    age: 10,
    teacher: {
        0: '张三',
        1: '李四'
    }
};

let obj2 = {
    age: 20,
    school: "北京",
    teacher: {2: "王五"}
};
```

1. 浅比较
定义：把两个对象合并为一个对象
方法：object.assign(obj1, obj2)
- 合并两个对象，返回合并后的对象
- 这个方法中的合并就是浅比较：只比较第一级
```js
let obj1 = {
    name: '小芝麻',
    age: 10,
    teacher: {
        0: '张三',
        1: '李四'
    }
};

let obj2 = {
    age: 20,
    school: "北京",
    teacher: {2: "王五"}
};
let obj = Object.assign(obj1,obj2);
console.log(obj);
```

2. 深比较
语法：let res = _assignDeep(obj1, obj2)
