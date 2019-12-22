//将用户模块独立
const signIn = (token)=>new Promise((resolve,
    reject)=>{
        wx.setStorageSync('token',token);
        wx.request({
            url:'https://api.github.com/user',
            data:{},
            header:Object.assign({'Authorization':token},{}),//请求信息里的请求头：包含cookie
            method:'GET',
            success:function(res){
                wx.setStorage({
                    key:'user',
                    data:res.data
                })
                resolve(res.data);
            },          
            fail(error) {

            }
        })
    })

module.exports = {
    signIn
}