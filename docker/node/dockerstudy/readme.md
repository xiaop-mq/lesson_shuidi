- Koa 是最流行的node 轻量级框架
  egg.js 基于Koa的二次开发
- koa new -> app -> listen
  bin/www 
  www文件就是网站项目的启动文件
  http.createServer(app.callback())
- 模板
  网站开发的views
  koa-views()
  app.use() 启用views中间件
  定位模板在哪里，使用哪种模板引擎 pug
- 设置路由 分层
  routes/index.js
  koa-routes()
  .get post 
  index.routes()
  app.use()
- logger (访问留下记录 核心功能)
  安装koa-logger use
- 出错模块
- 域名：https://img.bosszhipin.com/
  https://www.zhipin.com/job_detail/1c491d20c1ddd7f50nZ409y6GFY~.html?ka=comp_joblist_5
  静态资源 服务器端资源 
  通信找IP地址 
  静态资源：img.bosszhipin.com
  DNS解析？问网络供应商 DNS解析的列表
  公司会在网络供应商机房里去装一些cdn机器 如果本地没有？会去中央服务器里请求一次 就会缓存到本地
- 表单提交
  koa-bodyparser
  GET 请求头里 head GET url/ url?a=1&b=2
  POST head url body.length + body

## node的发布
  docker 容器化

node 项目，写完后，测试工程师（环境？）
让项目在不同的机器里面，享用相同的环境,跑起来 只要装一个docker