const fs = require('fs')
const image = fs.readFileSync('./cp.jpg').toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;


const client = new AipOcrClient('17712418','xPj3nBFxM5Ng7YmLPOB9jvKn','yq27ZgiHkLBnaVti9O7SkRYuYcHg0LSV');

const options = {};
options["multi_detect"] = "true";

client.licensePlate(image,options)
.then(function(result){
    console.log(result);
}) 