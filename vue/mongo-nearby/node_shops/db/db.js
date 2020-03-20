const mongoose = require('mongoose');
//mongoose.set('useCreateIndex', true)
mongoose.set('useCreateIndex', true) //使用创建索引功能
mongoose.connect('mongodb://localhost:27017/meituan', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; // 要是用 Node.js 自带的 Promise 替换 mongoose 中的 Promise，否则有时候会报警告
const db = mongoose.connection;

db.once('open' ,() => {
	console.log('连接数据库成功');
})

db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

module.exports = db;