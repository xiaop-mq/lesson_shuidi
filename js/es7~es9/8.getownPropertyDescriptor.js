// 获取对象的描述
let obj = {
  a: 1
}
// 1
obj.b = 2;
// 2
// 
Object.defineProperty(obj, 'c', {
  value: 3
})
Object.defineProperty(obj, 'd', {
  get() {
    return 4
  }
  // value: 4,
})
// req = {
//   get url() {

//   },
//   get headers() {

//   }
// }
let obj1 = {
  get length() {
    // 灵活
    // koa源码  get set方式
    return 10;
  },
  length: 10
}
console.log(obj1.length)
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));