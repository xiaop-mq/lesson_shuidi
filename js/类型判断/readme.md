## JavaScript专题之类型判断(上)
- 类型判断在 web 开发中有非常广泛的应用，简单的有判断数字还是字符串，进阶一点的有判断数组还是对象，再进阶一点的有判断日期、正则、错误类型，再再进阶一点还有比如判断 plainObject、空对象、Window 对象等等。
- typeof
console.log(typeof('yayu')) // string
 typeof 可是一个正宗的运算符，就跟加减乘除一样
 typeof 是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的一个字符串。
 JavaScript 共六种数据类型，分别是：
Undefined、Null、Boolean、Number、String、Object

function a() {}

console.log(typeof a); // function

var date = new Date();
var error = new Error();
console.log(typeof date); // object
console.log(typeof error); // object
返回的都是 object 呐，这可怎么区分~ 所以有没有更好的方法呢？
Obejct.prototype.toString

当 toString 方法被调用的时候，下面的步骤会被执行：

如果 this 值是 undefined，就返回 [object Undefined]
如果 this 的值是 null，就返回 [object Null]
让 O 成为 ToObject(this) 的结果
让 class 成为 O 的内部属性 [[Class]] 的值
最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串
- plainObject
纯粹的对象，所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。