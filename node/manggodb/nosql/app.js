// mongodb  数据库驱动 mysql
var MongoClient = require('mongodb').MongoClient;//实例化
//mongodb 连接实用mongodb:// 协议来连接 27107端口
var url = 'mongodb://192.168.31.128:27017/runoob';//连接
MongoClient.connect(url,{
    useNewUrlParser:true//通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告
},function(err,db){
        if (err){
            throw err;//抛出一个异常
         }
//         // console.log('数据库已创建！');
           var dbbase = db.db("runoob"); //选择数据库
//         //查询数据库是否是异步？回调方案
//         dbbase.createCollection('pmq_site',function(err,res){
//             //回调先处理错误
//             if(err){
//                 throw err;
//             }
//             console.log('创建了集合');
//             db.close();
//         })//异步而不是同步
               //插入数据
            //    var myObj = {name:'彭芃芃',url:'www.runoob'};
            //    dbbase
            //    .collection("pmq_site")
            //    .insertOne(myObj,function(err,res){
            //        if(err)
            //        throw err;
            //        console.log('文档插入成功');
            //        db.close();
            //    })
            dbbase.collection("pmq_site")
            .find({"name":"彭芃芃"})
            .toArray(function(err,result){
                if(err) throw err;
                console.log(result);
                db.close();
            })
 })