// //es5常见继承方式
// function Parent1(){
//     this.name = 'parent1' 
// }//parent存在方法child就无法继承
// function Child1(){
//     Parent1.call(this)//call把parent的作用域用来作用域child1里面 ‘继承’
//     this.type = 'child1'
// }
// console.log(new Child1)//实例 继承构造函数的属性


//原型链继承 不足：实例会被修改
// function Parent2(){
//     this.name = 'parent2'
//     this.play = [1,2,3]
// }
// function Child2(){
//     this.type = 'child2'
// }
// Child2.prototype = new Parent2()//原型链 直接继承parent2的属性和方法
// console.log(new Child2)
// var s1 = new Child2()
// var s2 = new Child2()
// s1.play.push(4)
// console.log(s1.play,s2.play)

//组合继承
function Parent3(){
    this.name = 'parent3'
    this.play = [1,2,3]
}
function Child3(){
    Parent3.call(this)
    this.type = 'child3'
}
// Child3.prototype = Parent3.prototype
Child3.prototype = Object.create(Parent3.prototype)
Child3.prototype.constructor = Child3//优化过后的组合继承方式
console.log(new Child3)

var s1 = new Child3()
var s2 = new Child3()
console.log(s1)