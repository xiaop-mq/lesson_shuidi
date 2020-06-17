// 实现new方法
function _new(fn,...args){
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
// new的作用
// 创建一个新对象 把对象的_proto_属性指向构造函数的原型对象
// 把上面创建的空对象赋值构造函数内部的this,用构造函数内部的方法修改空对象
// 如果构造函数返回非基本类型的值，则返回这个值，否则返回返回上面创建的对象

