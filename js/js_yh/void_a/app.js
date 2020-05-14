var http = require('http');

http.createServer((req,res) => {
    if(req.url=='/new_page_not_go'){
        res.writeHead(204); // 没有内容返回
        return 
    }
    // seq x
    // ack
    //              ack = x+1
    //              seq = y
    // ack = y + 1
    // 有了三次握手之后 链接就是可靠的有序的
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.write("hello world");
    res.end(`
       <html>
       <head></head>
       <body>
        <a href="/new_page_not_go">去新的页面</a>
       </body>
       </html>
    `)

})
.listen(3000)