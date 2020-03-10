const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
// restful 
router.post('/', (req, res) => {
  // 存时间时， 给日期的字符串 html表单的提交 
  // console.log(req.body); //请求体
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  }) //BSON doc
})

module.exports = router
