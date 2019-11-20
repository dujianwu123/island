const koa = require('koa')
const router = require('koa-router')
const app = new koa()
app.use(async (ctx, next) => {
  console.log(ctx.path);
  console.log(ctx.method);
  if (ctx.path === '/classic/latest' && ctx.method === 'GET') {
    ctx.body = {key: '111'}
  }
  await next()
})









app.listen(3000)