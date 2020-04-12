## JavaScript 深入之从 ECMAScript 规范解读 this
- 我们从 ECMASciript5 规范开始讲起
  ECMAScript 的类型分为`语言类型`和`规范类型`
  1. 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 
  2. 而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。
-  Reference 类型。它与 this 的指向有着密切的关联。
1. 什么又是 Reference?
Reference 类型就是用来解释诸如 `delete、typeof 以及赋值等操作行为`的.
这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。
2. 这段讲述了 Reference 的构成，由三个组成部分，分别是：
base value
referenced name
strict reference

`base value` 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。
- 而且规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。
1. GetBase:返回 reference 的 base value
2. IsPropertyReference:如果 base value 是一个对象，就返回true
- GetValue
    `GetValue 返回对象属性真正的值`，但是要注意：调用 GetValue，返回的将是具体的值，而不再是一个 Reference.这个很重要，这个很重要，这个很重要。

