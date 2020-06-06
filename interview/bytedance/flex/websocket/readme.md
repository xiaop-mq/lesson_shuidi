- http -> switch protocol tcp 连接不关闭，数据通过服务器端可以推送数据到客户端
wss:  http  https
1. 二维码扫描问题 使用轮询，不对的。
 轮询 -> 长轮询 —> websocket

web im 实时通讯

缺点：
setInterval(() => {
    // 错过一些数据，不同步
},300)
2. 长轮询
3. websocket
- http开销太高了

浏览器越来越向传统的客户端接近
