// const http = require('http')
// http.request({
//   headers: {},
//   url: {}
// })
const net = require('net');
const fs = require('fs');
const client = net.createConnection({
    port: 8088
}, () => {
    // 请求报文
    client.write('POST / HTTP/1.1\r\n');
    client.write('HOST: 127.0.0.1\r\n')
    client.write('Content-Length: 7\r\n');
    client.write('Content-Type: application/x-www-form-urlencoded\r\n');
    client.write('\r\n');
    client.write('abc=456');
})
// 分段
// 响应报文
let parser = new ResponseParser();
client.on('data', (data) => {
    //   console.log(data.toString());
    parser.receive(data.toString());
})
client.on('end', (data) => {
    console.log('disconnect');
})
// const write = fs.createWriteStream('./res.txt');
// client.pipe(write);
class ResponseParser {
    constructor() {
        this.WAIT_STATUS_LINE = 0;
        this.WAIT_STATUS_LINE_END = 1;
        this.WAIT_HEADER_NAME = 2;
        this.WAIT_HEADER_SPACE = 3;
        this.WAIT_HEADER_VALUE = 4;
        this.currentState = this.WAIT_STATUS_LINE;

        this.statusLine = "";
        this.headerName = "";
        this.headerValue = "";
        this.headers = {};
    }

    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string[i]);
        }
    }
    receiveChar(char) {
        if (this.currentState === this.WAIT_STATUS_LINE)
            if (char === '\r') {
                this.currentState = WAIT_STATUS_LINE_END
            } else {
                this.statusLine += char;
            }else if(this.currentState === this.WAIT_STATUS_LINE_END){
                if(char === '\n'){
                    this.currentState = this.WAIT_HEADER_NAME
                }
            }else if(this.currentState == this.WAIT_HEADER_NAME){
                if(char === ':'){
                    this.headerValue = this.WAIT_HEADER_SPACE
                }else {
                    this.headerName += char
                }
                if(char === ''){
                    this.headerValue = this.WAIT_HEADER_VALUE;
                }else {
                    this.currentState += char
                }
            }
    }
}

