// // Otaku 御宅族，简称宅
// function Otaku (name, age) {
//     this.name = name;
//     this.age = age;

//     this.habit = 'Games';
// }

// // 因为缺乏锻炼的缘故，身体强度让人担忧
// Otaku.prototype.strength = 60;

// Otaku.prototype.sayYourName = function () {
//     console.log('I am ' + this.name);
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin
// 可以看到，实例 person 可以：
// 访问到 Otaku 构造函数里的属性
// 访问到 Otaku.prototype 中的属性

// function Otaku (name, age) {
//     this.name = name;
//     this.age = age;

//     this.habit = 'Games';
// }

// Otaku.prototype.strength = 60;

// Otaku.prototype.sayYourName = function () {
//     console.log('I am ' + this.name);
// }

// function objectFactory() {
//     var obj = new Object(),
//     Constructor = [].shift.call(arguments);
//     obj.__proto__ = Constructor.prototype;
//     Constructor.apply(obj, arguments);
//     return obj;
// };

// var person = objectFactory(Otaku, 'Kevin', '18')

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin

// 返回值效果实现
function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined

function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return 'handsome boy';
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // undefined
console.log(person.habit) // undefined
console.log(person.strength) // 60
console.log(person.age) // 18

// 第二版的代码
function objectFactory() {

    var obj = new Object(),

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

};


