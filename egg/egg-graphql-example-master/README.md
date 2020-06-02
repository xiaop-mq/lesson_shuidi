1. node 业务能力 
  egg.js + ts + graphql + oAuth(第三方登录) = 升级node 开发细节，  

  - egg: koa 升级版
    使用graphql的插件机制
    graphql api查询模块插上去
    "egg-cors": "^2.2.3",// 跨域请求
    "egg": "^2.6.1",// 版本兼容性好
    "egg-sequelize": "^5.2.1",// 自动生成表内容

  - oauth:用于第三方登录 
    用户名+密码  传统， 
    github  微信  oAuth   auth 管理 第三方登录 
    核心信息在第三方， 你想使用， 
    1. 显示一个登录按钮
    2. 跳到第三方去登录
    
