const router = require ('koa-router')();
const controller = require('../controller/c-posts')
router.get('/',controller.getRedirectPosts);
router.get('/posts',controller.getPosts);//将Posts放置控制器中执行
module.exports = router;