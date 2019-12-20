const router = require('koa-router')();
const controller = require('../controller/c-signin');
//用来显示登录页
router.get('/signin',controller.getSignin);//分层
router.post('/signin',controller.postSignin);
module.exports = router;