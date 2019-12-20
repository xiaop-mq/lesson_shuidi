- NOSQL
MYSQL关系数据库
database->table->fieds
NOSQL 不需要写sql语句
JSON object {} .save()
find({}) 查找语句 db.orders.find({})查找
适合碎片化 结构型不是很良好的数据存储
Mongodb 云开发数据库就是线上版的 没有sql语句 API式的


- MYSQL            MONGODB
关系型数据库       NOSQL        Facebook 文档型
表与表之间的关系   新生代数据库  
shoe databases;    show dbs;
            use db;
tables;             collections 集合
SQL语句查询           JS  语法面向对象的API

- 连接了mongodb 数据库
 给了url mongodb://协议 
 - 创建数据表直接使用 db.createCollection('site');
 function(err,res){
     //首先处理err 出错
     //异步：消耗时间的，
     js里执行的代码不会阻塞，
     db.close();
 }


 代码顺序 
 1. createCollcetion
 2. db.close() 在外面
 执行顺序
 1. create ->去到mongodb ->create ->回来和我说
 2. 接着往后执行 
 
 - 有了数据库之后，在来个后端开发框架
  使用express 
  在node世界中，我们后端就是一个app
   使用app.get('/',(req,res)=>res.send('hello world'))//res返回 seq请求应答模式 
   app.listen(3000,)//在3000 端口上