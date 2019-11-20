const koa = require('koa')
const Router = require('koa-router')
/**路由自动注入 */
const requireDirectory = require('require-directory')
// const book = require('./api/v1/book')
// const classic = require('./api/v1/classic')

const app = new koa()

// api文件夹下的文件自动注入，用于路由的自动注入
const modules = requireDirectory(module, './app/api', {
  visit: whenLoadModule
})
function whenLoadModule (obj) {
  if (obj instanceof Router) {
    app.use(obj.routes())
  }
}
// app.use(book.routes())
// app.use(classic.routes())

app.listen(3000)