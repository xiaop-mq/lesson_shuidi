// 1.使用es6来实现，vue3.0 为什么使用 proxy 代替
let o1 = {a: 'hello'} // o1的原型对象
let o2 = Object.create(o1); // koa 源码中， 哪个对象会使用这个呢？


o2.b = 'world';


console.log('o1:', o1.b); // undefined
console.log('o2:', o2.a); // hello
console.log(o2.__proto__ === o1);

// KOA特点
// ctx = req + res  ctx解是objext.assign做的
// koa源码之怎么去造 ctx 这个对象
// compose 

const Koa = require('koa'); // class koa 实现EventEmitter
const app = new Koa();

app.use((ctx,next) => { // 传递的是函数fn 设计ctx context上下文 next怎么实现
    ctx.body = 'hello, body'; // 实现res.end()功能
})

app.listen(3000); // listen交给craeteServer callback