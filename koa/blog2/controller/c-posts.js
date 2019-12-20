exports.getPosts = async ctx =>{
    await ctx.render('posts',{

    })
    //中间件处理函数
    // ctx.body = {
    //     posts: []
    // }//向外返回
}
exports.getRedirectPosts = async ctx => {
    ctx.redirect('posts');
}