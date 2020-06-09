## this

### this规范
Types
ECMAScript的类型分为语言类型和规范类型
- ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。
- 而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record


## Reference
所以 Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。
尤雨溪大大: 这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。

1. 组成
- base value 
- referenced name
- strict reference

base value: 属性所在的对象
referenced name 就是属性的名称
```js
var foo = 1;

// 对应的reference是：
var fooReference = {
    base: EnvironmentRecord
    name: 'foo'
    strict: false
}
```

```js
var foo = {
    bar: function () {
        return this;
    }
};

foo.bar(); // foo

// bar对应的Reference是：
var BarReference = {
    base: foo,
    propertyName: 'bar',
    strict: false
};

```

2. 组成方法：getbase和IsPropertyReference

- GetBase: 返回reference的base value
- IsPropertyReference: 如果base value是一个对象，就返回true

## GetValue: reference类型获取对应值的方法
使用方法
```js
var foo = 1;

var fooReference = {
    base: EnviromentRecord,
    name: 'foo'
    strict: false
}

GetValue(fooReference) // 1
```
`调用 GetValue，返回的将是具体的值，而不再是一个 Reference`

## 如何确定this的值
1. 计算 MemberExpression 的结果赋值给 ref
2. 判断ref是不是一个reference类型
`2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)`

`2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)`

`2.3 如果 ref 不是 Reference，那么 this 的值为 undefined`

什么是MemberExpression?
- PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》
- FunctionExpression    // 函数定义表达式
- MemberExpression [ Expression ] // 属性访问表达式
- MemberExpression . IdentifierName // 属性访问表达式
- new MemberExpression Arguments    // 对象创建表达式

## foo.bar()
