const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

// 2d spare 是mongodb 内建的， 独有的功能
// 1. NOSQL 
// 2. 移动时代， 定位功能
shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near: [115.950531, 28.549066], // $ 在mongodb 里 函数
        $maxDistance: 0.2 //10公里 1 index 距离排序 
        // $lt $  
      } // mongodb 20 
    }).limit(1).exec(function(err, shops) {
      if (err) {
        console.log(err)
      }
      res.json(shops)
    })
})

shop.post('/', async(req, res) => {
  console.log('---shops');
  const fjnz = new Shop({
    name: '范家农庄时尚菜',
    location: [115.83478,28.71884]
  });
  fjnz
    .save((err, saved)=> {
      res.json({
        status:1
      })
    })
});

module.exports =  (app) => {
  app.use('/shops', shop);
}

