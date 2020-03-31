-  开发阶段可以应用域名
   www.taobao.com 上淘宝
   前端第一个难题 运行代码
   在本地支持www.taobao.com

   www.taobao.com -> ip       上淘宝
   在本地域名缓存中先查找   访问过 本地会缓存的
   IP  家庭地址
   没有访问过 就找最近的运营服务商 访问 www 域名系统 国内有

   C:\Windows\System32\drivers\etc\host
   host文件  先来这边找找   程序员来设置
   www.taobao.com 本地 可以在本地做开发

- 如何干掉8080？
    nginx
    vue vue.config.js proxy 8080 
    api/users/create-> proxy <----> 3000

    反向代理 www.taobao.com:80 www.taobao.com default_port 80
    nginx是高性能的http服务
    配置下反向代理
    :80 default 不用加 www.taobao.com 默认使用80端口启动服务
    8080 live-server 由80端口反向代理

- 我离肯德基由多远？
  百度地图，API
  把自己的坐标，店的坐标 多元 lbs