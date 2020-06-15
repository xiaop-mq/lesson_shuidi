- 朗读出来
- 手写代码的抄写工作
- 研究几个VUE/REACT
VUE的响应式原理中的Object.defineProperty有什么缺陷?

- proxy可以代理整个对象 defineProperty 每个属性单独代理

- 在vue2.0中,defineProperty并没有对数组提供完全的数据劫持
  有一个前端性能的坑, n  empty object  数组，会进入到死循环中。  push pop 常用的方法 

1. Object.defineProperty 无法监控到数组下标的变化(vue对push常用操作,defineProperty)不能实时响应
2. Object.defineProperty只能劫持对象的属性,proxy 可以代理(劫持)整个对象,并返回一个新的对象
3. proxy不仅可以代理对象,还可以代m理数组.

- vue 2.0 数组没有下标支持变化  push  pop  ?


# JS一百问???

## 介绍下HTTPS中间人攻击
 https = http + ssl协议组成
中间人攻击过程如下:
1. 服务器向客户端发送公钥
2. 攻击者截获公钥,保留在自己的手上
3. 然后攻击者自己生成一个伪造的公钥,发送给客户端
4. 客户端收到伪造的公钥后,生成家吗hash值发给服务器
5. 攻击者通过加密hash值,用自己的私钥解密获得真密钥
6. 同时生成家的加密hash值,发给服务器
7. 服务器用私钥解密获得假密钥
8. 服务器用假密钥加密传输信息

防范方法:
服务端在发送浏览器的公钥中加入CA证书,浏览器可以验证CA证书的有效性.