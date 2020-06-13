function supFather(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

supFather.prototype.sayName = function(age){
    console.log(this.name, 'age');
}

function sub(name, age){
    // 1. 执行一次构造函数
    supFather.call(this.name); // call可以实现继承
    this.age = age;
}

// 细节
function inheritPrototype(sonFn, fatherFn){
    // 将代码完成子类对父类的原型的获取
    // 如何实现
    // 通过 将父类的原型交给子类的原型
    sonFn.prototype = Object.create(fatherFn.prototype);
    // 有问题吗，做完了吗
    // object.create 获取原型对象
    sonFn.prototype.constructor = sonFn;
}
inheritPrototype(sub, supFather);
sub.prototype.sayAge = function(){
    return this.age
}