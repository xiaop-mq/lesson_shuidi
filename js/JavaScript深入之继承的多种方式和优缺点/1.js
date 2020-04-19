// 1.原型链继承
// function Parent () {
//     this.name = 'kevin';
// }

// Parent.prototype.getName = function () {
//     console.log(this.name);
// }

// function Child () {

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// console.log(child1.getName())


// 1.引用类型的属性被所有实例共享
// function Parent () {
//     this.names = ['kevin', 'daisy'];
// }

// function Child () {

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// child1.names.push('yayu');

// console.log(child1.names); // ["kevin", "daisy", "yayu"]

// var child2 = new Child();

// console.log(child2.names); // ["kevin", "daisy", "yayu"]
// 2.在创建 Child 的实例时，不能向Parent传参

// 2.借用构造函数(经典继承)
// function Parent () {
//     this.names = ['kevin', 'daisy'];
// }

// function Child () {
//     Parent.call(this);
// }

// var child1 = new Child();

// child1.names.push('yayu');

// console.log(child1.names); // ["kevin", "daisy", "yayu"]

// var child2 = new Child();

// console.log(child2.names); // ["kevin", "daisy"]

// 优点：

// 1.避免了引用类型的属性被所有实例共享

// 2.可以在 Child 中向 Parent 传参
// 举个例子：
// function Parent (name) {
//     this.name = name;
// }

// function Child (name) {
//     Parent.call(this, name);
// }

// var child1 = new Child('kevin');

// console.log(child1.name); // kevin

// var child2 = new Child('daisy');

// console.log(child2.name); // daisy
// 缺点：

// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

// 3.组合继承
// 原型链继承和经典继承双剑合璧。
// function Parent (name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//     console.log(this.name)
// }

// function Child (name, age) {

//     Parent.call(this, name);

//     this.age = age;

// }

// Child.prototype = new Parent();

// var child1 = new Child('kevin', '18');

// child1.colors.push('black');

// console.log(child1.name); // kevin
// console.log(child1.age); // 18
// console.log(child1.colors); // ["red", "blue", "green", "black"]

// var child2 = new Child('daisy', '20');

// console.log(child2.name); // daisy
// console.log(child2.age); // 20
// console.log(child2.colors); // ["red", "blue", "green"]复制代码优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

// var person = {
//     name: 'kevin',
//     friends: ['daisy', 'kelly']
// }

// var person1 = createObj(person);
// var person2 = createObj(person);

// person1.name = 'person1';
// console.log(person2.name); // kevin

// person1.firends.push('taylor');
// console.log(person2.friends); // ["daisy", "kelly", "taylor"]
// 注意：修改person1.name的值，person2.name的值并未发生改变，并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'person1'，给person1添加了 name 值，并非修改了原型上的 name 值。

// 5. 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
// function createObj (o) {
//     var clone = object.create(o);
//     clone.sayName = function () {
//         console.log('hi');
//     }
//     return clone;
// }
// 复制代码缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

// 6. 寄生组合式继承
// function Parent (name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//     console.log(this.name)
// }

// function Child (name, age) {
//     Parent.call(this, name);
//     this.age = age;
// }

// Child.prototype = new Parent();

// var child1 = new Child('kevin', '18');

// console.log(child1)
// 组合继承最大的缺点是会调用两次父构造函数。
// 一次是设置子类型实例的原型的时候：

// Child.prototype = new Parent();
// 一次是设置子类型实例的原型的时候：

// Child.prototype = new Parent();
// 回想下 new 的模拟实现，其实在这句中，我们会执行：

// Parent.call(this, name);
// 在这里，我们又会调用了一次 Parent 构造函数。
// 所以，在这个例子中，如果我们打印 child1 对象，我们会发现 Child.prototype 和 child1 都有一个属性为colors，属性值为['red', 'blue', 'green']。
// 那么我们该如何精益求精，避免这一次重复调用呢？
// 如果我们不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 访问到 Parent.prototype 呢？
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(child1);



