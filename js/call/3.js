function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}//原型对象
const qing = new Person('琴');
console.log(qing.getName());
//构造函数
console.log(Person.prototype.constructor);
console.log(qing._proto_,Person.prototype,qing._proto_==Person.prototype);//拿到对象的原型对象是谁
