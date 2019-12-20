Page({
  http(){
 //要去其他网站拿数据
 //让他上云吧 上云之后计算能力特别强 前段后端合作
 wx.cloud.callFunction({
   name:'http'
 })//调用云函数
 //.then 从云下来
 .then(res => {//res箭头函数 返回结果
  console.log(res);
 })
  }
})//函数