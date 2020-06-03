1. node 插入一条qrcode 记录，{arcode_id:, expires_at, create_at}生成一个二维码图片
2. PC端的登录页， 二维码， 显示出来
3. 扫码 得到 qrcodeId 使用 postmon来模拟

PC端扫码登陆方案，并需要传递哪些信息？

1. 头条懂车帝，比较复杂的业务考题
   jwt(cookie session)  轮询怎么做  后端的mongodb登录  如何生成二维码(node)  扫码登陆
   URL 输入 浏览器 发生了什么?
2. 关于 node  前端  登录  api封装的业务开发理解

 
1. 需要有一个二维码：包含一段信息的图片 使用node qrcode 包生成
2. 手机扫码 微信App(Unionapp,RN)手机微信登录了，扫码，
    轮询 过几分钟 安全问题
  - 细节：手机APP 微信，github, QQ 已经登录(前提) cookie(token)  头像  id，用户名(发送ajax请求) =》 二维码里 等待着手机端传递过来的信息
  1. 生成二维码 在mongodb里面 存 唯一qrcode_id 生成时间time  过期时间expires
  2. 手机扫码时，手机已经登录就有token的值(cookie) 把token给 二维码，当手机扫的时候触发ajax post请求到服务器端，到服务端， token qrcode_id 解析出来给user_id
  3. mongodb 二维码， 登陆中， user信息， token 也传给PC页面，PC端也登录成功，
  4. 最后跳转到已登录成功状态。
  - 扫一下 手机APP里的用户头像， 用户id ，以及登录状态，都传到了 PC端 
  - 结果是PC端登录了。
    服务器端要认识你是谁，token 代替 cookie(安全性不高)
    新登录形式jwt

    connect()函数