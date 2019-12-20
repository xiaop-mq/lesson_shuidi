const express = require ('express'); //de 开发框架
const path = require('path');
const bodyParser=require('body-parser');//解析表单的包
//连接数据库
const MongoClient=require('mongodb').MongoClient;
const ObjectID = require('mongodb')
.ObjectID;
const url='mongodb://192.168.31.129:27017/meituan'; 
let dbo;
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if (err){
        console.log(err);
        teturn;
    }
    dbo=db;
    console.log('数据库连接成功！');
})
const app = express();
// const path = require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extender:false
}));
app.use(bodyParser.json({}))   //黑盒

app.get('/', function(req,res){

    res.send({
        code: 0,
        message: 'hello world'
    })
})
app.get('/restaurant/:restaurant_id',(req,res)=>{   //restaurant为用户请求  ：restaurant_id 为动态参数
    let restaurant_id=req.params.restaurant_id      //params为路径参数
    let dbObject = dbo.db("meituan");
    dbObject
    .collection("restaurant")
    .find({
        _id:ObjectID(restaurant_id)
    })
    .toArray((err,result) => {
        // res.send({
        //     msg: 'OK',
        //     data:result[0]
        // })
        res.render('index',{
            restaurant: result[0]
        })
    })
    // res.send({
    //     msg:'ok',
    //     id:restaurant_id
    // })
})
app.post('/restaurant',(req,res)=>{
    //用户填的表单 req.body
    console.log(req.body);
    let dbObject=dbo.db("meituan");
    dbObject
      .collection("restaurant")
      .insertOne(req.body,(req,result)=>{
          console.log(result.insertedId);
      })
    res.send({
        code:0,
        data:req.body
    })
})
app.listen(3231);   //访问时 localhost：7222  每次访问时要关闭 ctrl+c ^c