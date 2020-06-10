function Otaku(name, age){
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function(){
    console.log('I am ' + this.name);
}
var person = new Otaku('kevin', 18);
console.log(person.name); // kevin
console.log(person.habit); // Games
console.log(person.strength); // 60

person.sayYourName();// I am kevin

// person可以
// 1. 访问到Otaku构造函数里的属性
// 2. 访问到Otaku.prototype中的属性