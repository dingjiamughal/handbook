#!/usr/bin/env node

const Koa = require('koa');
const send = require('koa-send');

const app = new Koa();

app.use(async (ctx, next) => {
  // 加载静态文件
  await send(ctx, ctx.path, { root: process.cwd(), index: 'index.html' });
  await next();
});

app.listen(5000);

console.log('服务器已经启动 http://localhost:5000');
