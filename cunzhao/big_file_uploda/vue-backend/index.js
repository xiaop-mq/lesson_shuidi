const http = require('http');
const server = http.createServer();
//定义新概念，让他既是一个模块又是一个对象
const Controller = require('./controller');

const controller = new Controller;

server.on("request",async (req,res) => 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if(req.method === 'OPTIONS'){
        res.status = 200;
        res.end();
        return;
    }


    if(req.url == '/verify') {
        // res.end('verify');
        await controller.handleVerifyUpload(req,res)
    }
})
server.listen(3000,() => console.log("正在监听3000端口"));