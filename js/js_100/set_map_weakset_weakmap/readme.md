## Set Map WeakSet WeakMap的区别
- Set和Map主要的应用场景在于`数据重组`和`数据储存`
- Set是一种叫做`集合`的数据结构,Map是一种叫做`字典`的数据结构.

## 集合(set)
ES6新增的一种数据结构,类似于数组,但`成员是唯一且无序的,没有重复的值.`
- Set本身是一种构造函数,用来生成Set数据结构.
```js
new Set([ietrable])
```
- Set对象允许你存储任何类型的唯一值,无论是原始值或者是对象引用.

- 向set加入值的时候,不会发生类型转换,所以5和"5"是两个不同的值内部判断,Set内部判断两个值是否不同,使用的算法叫做"same-value-zero equality",它类似于精确相等的运算符(===),主要的区别是**NaN自身,而精确相等运算符认为NaN不等于自身.**

- Set实例属性
   - constructor: 构造函数
   - size: 元素数量
    ```js
    let set = new Set([1, 2, 3, 2, 1])
    console.log(set.length) // undefined
    console.log(set.size) // 3
    ```

- Set实例方法
  - 操作方法
    - add(value): 新增,相当于array里的push
    - delete(value): 存在即删除集合中value
    - has(value): 判断集合中是否存在value
    - clear(): 清空集合
     ```js
     let set = new Set()
     set.add(1).add(2).add(1)

     set.has(1) //true
     set.has(3) // false
     set.delete(1) 
     set.has(1) // false
     ```
    - array.from方法可以将set结构转为数组
    ```js
    const items = new Set([1, 2, 3, 2])
    const array = Array.from(items)
    console.log(array) // [1, 2, 3]
    // 或
    const arr = [...items]
    console.log(arr) // [1, 2, 3]
    ```
    - 遍历方法(遍历顺序为插入顺序)
      - keys(): 返回一个包含集合中所有键的迭代器
      - values(): 返回一个包含集合中所有值的迭代器
      - entries(): 返回一个包含set对象中所有元素的键值对迭代器
      - foreach(callbackFn,thisArg): 用于集合成员执行callbackFn操作,如果提供了thisArg参数,回调中的this会是这个参数,没有返回值.
      ```js
      let set = new Set([1, 2, 3])
      console.log(set.keys()) // SetInterator{1, 2, 3}
      console.log(set.values()) // setInterator{1, 2, 3}
      console.log(set.entries())  // setInterator{1, 2, 3}

        for (let item of set.keys()) {
        console.log(item);
        }	// 1	2	 3
        for (let item of set.entries()) {
        console.log(item);
        }	// [1, 1]	[2, 2]	[3, 3]
        set.forEach((value, key) => {
        console.log(key + ' : ' + value)
        })	// 1 : 1	2 : 2	3 : 3
        console.log([...set])	// [1, 2, 3]
      ```
      - set可默认遍历,默认迭代器生成函数是values()方法
      ```js
      Set.prototype[Symbol.iterator] === Set.prototype.values	// true
      ```
      - 所以,set可以使用map,filter方法
      ```js
      let set = new Set([1, 2, 3])
      set = new Set([...set].map(item => item * 2)) 
      console.log([...set]) // [2, 4, 6]

      set = new Set([...set].filter(item =>(item) >= 4))
      console.log([...set]) // [4, 6]
      ```
      - set很容易实现交集,并集,差集
      ```js
      let set1 = new Set([1, 2, 3])
      let set2 = new Set([4, 3, 2])

      let intersect = new Set([...set1].filter(value => set2.has(value)))
      let union = new Set([...set1, ...set2])
      let difference = new Set([...set1].filter(value => !set2.has(value)))

      console.log(intersect)	// Set {2, 3}
        console.log(union)		// Set {1, 2, 3, 4}
        console.log(difference)	// Set {1}
      ```

## WeakSet
- WeakSet对象允许你`将弱引用对象储存在一个集合中`
- WeakSet和Set的区别:
  - `WeakSet只能储存对象引用,不能存放值`,而Set对象都可以
  - WeakSet对象中储存的对象值都是被弱引用的,即垃圾回收机制不考虑weakset对该对象的应用,所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素
- constructor: 构造函数,任何一个具有interable接口的对象,都可以作为参数
```js
const arr = [[1, 2], [3, 4]]
const weakset = new WeakSet(arr)
console.log(weakset)
```
- add(value)：在WeakSet 对象中添加一个元素value
- has(value)：判断 WeakSet 对象中是否包含value
- delete(value)：删除元素 value
- clear()：清空所有元素，注意该方法已废弃
```js
var ws = new WeakSet()
var obj = {}
var foo = {}

ws.add(window)
ws.add(obj)

ws.has(window) // true
ws.add(foo) // false

ws.delete(window) // true
ws.has(window) // false
```

3. 字典(Map)
- 集合与字典的区别
  - 共同点: 集合和字典可以存储不重复的值
  - 不同点: 集合是以[value, value]的形式存储元素,字典是以[key, value]的形式存储
  ```js
  const m = new Map()
    const o = {p: 'haha'}
    m.set(o, 'content')
    m.get(o)	// content

    m.has(o)	// true
    m.delete(o)	// true
    m.has(o)	// false
  ```

- 任何具有interator接口且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数,例如:
```js
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```

- 如果读取一个未知的键，则返回undefined。
```js
new Map().get('asfddfsasadf')
// undefined
```

- 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
```js
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```

## WeakMap
- WeakMap对象是一组键值对的集合,其中的键是弱引用对象,而值是可以任意
- 注意,WeakMap弱引用的只是键名,而不是键值.键值依然是正常使用.

## 总结
- Set
  - 成员唯一,无序且不重复
  - [value, value],键值与键名是一致的(或者说只有键值,没有键名)
  - 可以遍历,方法有: add delete has
- WeakSet
  - 成员都是对象
  - 成员都是弱引用,可以被垃圾回收机制挥手,可以用来保存DOM节点,不容易造成内存泄漏
  - 不能遍历,方法有add delete has
- Map
  - 本质上是键值对的集合,类似集合
  - 可以遍历,方法很多可以跟各种数据格式转换
- WeakMap
  - 只接受对象作为键名(null除外),不接受其它类型的值作为键名
  - 键名是弱引用,键值可以是任意的,键名所指向的对象可以被垃圾回收,此时键名是无效的
  - 不能遍历,方法有get set has delete