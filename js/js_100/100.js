// 计算出输出结果
function Foo() { // Foo的构建方法，没产生实例，也没有执行
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
// Foo上挂载了原型方法a，方法输出值为3
Foo.prototype.a = function() {
    console.log(3)
}
// Foo上挂载了直接方法a，输出值为4
Foo.a = function() {
    console.log(4)
}

// 立即执行了Foo上的方法，也就是刚刚的方法
Foo.a(); 

// 这里调用了Foo的构建方法，Foo的构建方法主要做了两件事
// 1. 将全局的直接方法a替换输出1的方法
// 2. 在新对象上挂载直接方法a，输出值为2
let obj = new Foo();

// 因为又直接方法a，不需要去访问原型链
// 所以这里使用的this.a
obj.a();

// 构建方法里已经替换换了全局Foo上的a方法
// 输出1 
Foo.a();
