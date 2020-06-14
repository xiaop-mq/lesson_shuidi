## 为什么说for...of是JS中的一颗宝石？
- for...of可以迭代数组、类数组、以及任何可迭代的对象(map, set, DOM集合)，并且for...of的语句很短。

1. 快速了解可迭代
我们可以使用`Symbol.iterator`方法来确定某个数据是否可迭代。
```js
const array = [1, 2, 3];
const iterator1 = array[Symbol.iterator]();
iterator.next();
```

2. 为什么是宝石?
- 简明扼要
- 接收迭代器,包括数组,字符串set,map,DOM集合
- 接受类数组对象
- 迭代的项目可以在就地解构