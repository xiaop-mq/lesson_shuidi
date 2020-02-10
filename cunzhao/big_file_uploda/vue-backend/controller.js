const path = require('path');
const fse = require("fs-extra");
const multiparty = require('multiparty');
const UPLOAD_DIR = path.resolve(__dirname, "..", "target");

const extractExt = filename =>
    filename.slice(filename.lastIndexOf("."), filename.length)

const resolvePost = req =>
    new Promise(resolve => {
        // post 数据慢慢来的
        let chunk ="";
        req.on("data", data => {
            chunk += data; //二进制流
        })
        req.on("end", () =>{
            console.log('end', chunk);
            resolve(JSON.parse(chunk))
        })
    })
module.exports = class {
    async handleVerifyUpload(req,res){
        // res.end('verify');
        // 服务器端有没有这个文件
        //拿到post 的data, bodyParser
        const data = await resolvePost(req);
        const { fileHash, filename } = data;
        const ext = extractExt(filename);
        console.log(ext);
        const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
        console.log(filePath);
        if(fse.existsSync(filePath)){//判断文件以前是否上传过
            res.end(
                JSON.stringify({
                    shouldUpload: false
                })
            )
        }else {
            res.end(
                JSON.stringify({
                    shouldUpload: true,
                    uploadedList: []
                })
            )
        }
    }
    async handleFormData(req,res){
        //处理带有文件上传的表单
        const multiparty = new multiparty.Form;
        multiparty.parse(req,async (err, fields, files) => {
            if(err) {
                console.error(err);
                res.status = 500;
                res.end("process file chunk failed");
                return;
            }
            const [chunk] = files.chunk;
            const [hash] = fileds.hash;
            const [fileHash] = fileds.fileHash;
            const [filename] = fileds.filename;
            console.log(chunk,hash,fileHash,filename);
        })
    }
}
