const koa = require('koa')
const InitManager = require('./core/init')

const app = new koa()
process.cwd()
InitManager.initCore(app)
app.listen(3000)