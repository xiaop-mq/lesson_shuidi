- 原型式继承
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
缺点：
包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
- 引用《JavaScript高级程序设计》中对寄生组合式继承的夸赞就是：
这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
