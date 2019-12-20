// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js');
const app = new Koa();
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
// ?use 答应模式 矿泉水 中间件是处理应用请求的核心
// 启用路由中间件

// app.listen(3000);
// __dirname:返回当前为绝对路径的物理位置
app.use(
    views(
     path.join(__dirname,'./views'),{
    extension:'ejs'
}
))
app.use(postRouter.routes());//启用路由，路由地址放在内部了
app.use(signinRouter.routes());


console.log(`listening on port ${config.port}`);
app.listen(config.port);