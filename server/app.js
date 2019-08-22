const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const {connectDB, initSchemas} = require('./initDatabase.js');

// bodyParser 和 cors 这两个中间件必须放在最前面使用，否则会失效

// 在app上使用cors中间件来实现后台处理前端请求跨域问题
app.use(cors());
// 在app上使用bodyParser中间件来处理POST请求传递来的参数
app.use(bodyParser());

let pageController = require('./controller/pageController.js');

// 装载所有的子路由
let router = new Router();
router.use('/page',pageController.routes());

// 在app上加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 立即执行函数里执行连接数据库操作
;(async()=>{
  await connectDB();
  initSchemas();
})()

app.use(async(ctx)=>{
  ctx.body = 'Hello Koa!';
})

app.listen(3000,()=>{
  console.log('[Server] Starting at port 3000');
});