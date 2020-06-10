## js各种继承方式和优缺点

### 原型链继承
```js
function Parent(){
    this.name = 'Kevin'
}
Parent.prototype.getName = function(){
    console.log(this.name);
}
function Child(){

}
Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName()); // kevin
```
- 问题
1. 引用类型的属性被所有实例共享
```js
function Parent(){
    this.names = ['kevin', 'daisy'];
}
function Child(){}
Child.prototype = new Parent();
var child1 = new Child();
child1 = new Child();
child1.name.push('xiaop'); 
console.log(child1.names); 
//[kevin,daisy,xiaop]
var child2 = new Child();
console.log(child2.names);
//[kevin,daisy,xiaop]
```
2. 再创建Child实例时,不能像Parent传参

### 借用构造函数继承(经典继承)
```js
function Parent(){
    this.names = ['kevin', 'daisy'];
}
function Child(){
    Parent.call(this);
}
var child1 = new Child()
child1.names.push('xiaop')
// ['kevin', 'daisy', 'xiaop']
console.log(child1.names);

var child2 = new Child();
// [kevin, daisy]
console.log(names);
```
- 优点
1. 避免了引用类型的属性被所有实例共享
2. 可以在Child中向Parent传参
```js
function Parent (name) {
    this.name = name;
}

function Child (name) {
    Parent.call(this, name);
}

var child1 = new Child('kevin');

console.log(child1.name); // kevin

var child2 = new Child('daisy');

console.log(child2.name); // daisy
```
缺点: 方法都在构造函数中定义,每次创建实例都会创建一遍方法.

### 组合继承
原型链和经典继承双剑合璧
```js
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
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child1 = new Child('kevin', '18');
child1.colors.push('black');
console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]
var child2 = new Child('daisy', '20');
console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```
- 优点: 融合原型链继承和构造函数的优点,是js种最常用的继承模式.

## 原型式继承
```js
function createObj(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```
是ES5 Object.create的模拟实现,将传入的对象作为创建对象的原型.
缺点: 包含引用类型的属性始终都会共享相应的值,这点和原型链继承一样.
```js
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}
var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1'
console.log(person2.name); // kevin

person1.friends.push('taylor');
// [daisy,kelly,taylor]
console.log(person.friends);
```
- 注意: 修改person1.name的值,person2.name的值未发生改变,并不是因为person1和person2有独立的name值,而是因为person1.name = 'person1',给persn添加了name值,并非修改了原型上的name值.

### 寄生式继承
- 创建一个仅用于封装继承的函数,该函数再内部以某种形式来增强对象,最后返回对象.
```js
function createObj(o){
    var clone = Object.create(o)
    clone.sayName = function(){
        console.log('hi')
    }
    return clone;
}
```
- 缺点: 跟接用构造函数模式一样,每次创建对象就会创建一遍方法.

### 寄生组合式继承
```js
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

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1)
```
- 组合继承最大的缺点就是会调用两次父构造函数
1. 一次是设置子类型实例的原型的时候
```js
Child.prototype = new Parent();
```
2. 一次再创建子类型实例的时候
```js
var child1 = new Child('kevin', '18');
```