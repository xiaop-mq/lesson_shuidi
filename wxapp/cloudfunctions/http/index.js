// 云函数入口文件
//初始化
const cloud = require('wx-server-sdk')
const got = require('got')
//got是一个库
//初始化
cloud.init()

// 云函数入口函数
// async 表示异步 await
//event 出事：小程序客户端 当他callFunction的时候 event代表一个小程序
//const代表上下文
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get')
  // console.log(getResponse,'++++++++++');

  let postResponse = await ('httpbin.org/post',{
    method:'POST',
    headers:{
      'Content-Type':
      'Application/JSON'
    },
    body:JSON.stringify({
      title:'这是标题',
      value:123
    })
  })
    return postResponse.body
  
}