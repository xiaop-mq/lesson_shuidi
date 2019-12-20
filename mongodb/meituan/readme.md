- app.get('/',function(req,res){

})
req+res=一次用户请求的相应
express http server
wedscoket

-url 显示餐馆的详情 就代表是/restaurant
/restaurant/:restaurant_id 
:restaurant_id?
https://www.meituan.com//协议path/restaurant/params a=1&b=2//查询字符串


- http 协议
- damain 域名
- path /restaurant/:id 指路径 动态参数部分
- GET 谓语动词 通过url获得 请求相应的动作要执行相应的动作
  设计新加餐馆的url 
  1.首先添加一个表单
   路径部分还是/restaurant
   使用Post方法提交 /restaurant 就有一个form要保存
   如果是get  /restaurant餐馆的列表 /restaurant?page=1把第一页的数据放进去

   - //连接数据库 非关系型数据库mongodb
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://192.168.31.128.27107/meituan'//访问这台电脑里的美团

-数据库的连接 
MongoClient.connect(url,{
    useNewUrlParser:ture
},function(err,db){
    if(err){
        console.error(err);
    }
    console.log('数据库连接成功')
})
req 请求
mongodb 是collection不是form