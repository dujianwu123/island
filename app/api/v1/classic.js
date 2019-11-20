const Router = require('koa-router')
const router = new Router()

router.get('/classic', (ctx, next) => {
  ctx.body = {
    classic: 123
  }
})

module.exports = router