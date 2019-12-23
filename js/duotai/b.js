var makeSound = function(animal){
    //大自然是很多的 多态只要对象具有统一的接口，那么可以互换使用
    // if(animal instanceof Duck){
        
    // }else if(animal instanceof Chicken){
        
    // }
    animal.say();//面向对象的优化
}
var Duck = function(){};
Duck.prototype.say = function(){
    console.log('嘎嘎嘎');
}
var Chicken = function(){};
Chicken.prototype.say = function() {
    console.log('咯咯咯');
}
makeSound(new Chicken());