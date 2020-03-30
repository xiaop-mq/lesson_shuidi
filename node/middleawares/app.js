const Koa = require('koa');
const app = new Koa();
const routing = require('./routes');
routing(app);
app.listen(3321, () => console.log('online'))