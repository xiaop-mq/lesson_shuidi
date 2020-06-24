// "hello"   string
// 使用buffer来存怎么做？
// node  io  net  fs
// 数据包通信， 文件上传，压缩 流操作， 位操作， 二进制

// string -> 二进制 在发生 buffer stream

// "hello" express res.end("hello") Buffer是什么样的？

// "string" 字符串
// Buffer 是 js 二进制处理的类 new Buffer(length, );
// hello h -> ascii 码 -》二进制码去处理 -》 Buffer
// 01 8 16 32
// 0x 16进制
var array = 'hello'.split('').map(v => {
    return '0x' + v.charCodeAt(0).toString(16)
  })
  console.log(array);
  
  const buf = new Buffer(array);
  // buf 存的16进制 转成高级的内容
  console.log(buf.toString());
  