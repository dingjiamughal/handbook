const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = '123aa121aa';
});

app.listen(3100);
