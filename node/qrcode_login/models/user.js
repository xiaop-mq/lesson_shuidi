// 登录模块
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// jwt 存在用户表
const UserSchema = new Schema({
  username: String,
  password: String,
// token 在client 端 可以通过localStorage.setItem()登录
  token: String // 唯一的 标记字符串
})


module.exports = mongoose.model('User', UserSchema);