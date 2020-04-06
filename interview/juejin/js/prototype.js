// 使用new创建
// function Person() {

// }
// var person = new Person();
// person.name = 'Kevin';
// console.log(person.name)

// function Person() {

// }
// // 虽然写在注释里，但是你要注意：
// // prototype是函数才会有的属性
// Person.prototype.name = 'Kevin';
// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.name) // Kevin
// console.log(person2.name) // Kevin
// 函数的 prototype 属性指向了一个对象，
// 这个对象正是调用该构造函数而创建的实例的原型，
// 也就是这个例子中的 person1 和 person2 的原型。
// 这是每一个JavaScript对象(除了 null )都具有的一个属性，
// 叫__proto__，这个属性会指向该对象的原型。

// function Person() {

// }
// var person = new Person();
// console.log(person.__proto__ === Person.prototype);

// 既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？
// constructor
// 指向实例倒是没有，因为一个构造函数可以生成多个实例，
// 但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，
// 每个原型都有一个 constructor 属性指向关联的构造函数。
// function Person() {

// }
// console.log(Person === Person.prototype.constructor);

// function Person() {

// }

// var person = new Person();

// console.log(person.__proto__ == Person.prototype) // true
// console.log(Person.prototype.constructor == Person) // true
// // 顺便学习一个ES5的方法,可以获得对象的原型
// console.log(Object.getPrototypeOf(person) === Person.prototype) // true

// 实例与原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，
// 如果还查不到，就去找原型的原型，一直找到最顶层为止。
// function Person() {

// }

// Person.prototype.name = 'Kevin';

// var person = new Person();

// person.name = 'Daisy';
// console.log(person.name) // Daisy

// delete person.name;
// console.log(person.name) // Kevin

// 在这个例子中，我们给实例对象 person 添加了 name 属性，
// 当我们打印 person.name 的时候，结果自然为 Daisy。

// 但是当我们删除了 person 的 name 属性时，
// 读取 person.name，
// 从 person 对象中找不到 name 属性就会从 person 的原型
// 也就是 person.__proto__ ，也就是 Person.prototype中查找，
// 幸运的是我们找到了 name 属性，结果为 Kevin。

// 但是万一还没有找到呢？原型的原型又是什么呢？
// var obj = new Object();
// obj.name = 'Kevin'
// console.log(obj.name) // Kevin

// null 表示“没有对象”，即该处不应该有值。
// console.log(Object.prototype.__proto__ === null)

// function Person() {

// }
// var person = new Person();
// console.log(person.constructor === Person); // true
// person.constructor === Person.prototype.constructor

// __proto__
// 其次是 __proto__ ，
// 绝大部分浏览器都支持这个非标准的方法访问原型，
// 然而它并不存在于 Person.prototype 中，
// 实际上，它是来自于 Object.prototype ，
// 与其说是一个属性，不如说是一个 getter/setter，
// 当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。