const path = require('path');
const fs = require('fs');
const http = require('http');
const cp = require('child_process');

const Koa = require('koa');
const helmet = require('koa-helmet');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const cors = require('koa-cors');
const views = require('co-views');
const prettier = require('prettier');

const app = new Koa();

app.use(helmet());
app.use(cors());

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
);

let flag = false;

// 简单点，错误状态
const message = {
  pending: '正在编译，请耐心等待',
  success: '执行成功'
};

router.post('/api/clear', async ctx => {
  cp.spawnSync('rm', ['-rf', 'dist']);
  cp.spawnSync('rm', ['-rf', 'demo.html']);
  ctx.body = { status: 0 };
});

router.post('/api/compile', async ctx => {
  flag = false;

  const code = prettier.format(ctx.request.body, { tabWidth: 4, parser: 'html' });

  fs.writeFileSync(path.resolve(__dirname, 'demo.html'), code, 'utf8');

  const child = cp.spawn('yarn', ['build'], { cwd: process.cwd(), stdio: 'inherit' });
  child.on('error', e => {
    console.error(e.message);
    ctx.body = { status: 1, content: e.message };
    process.exit(1);
  });
  child.on('exit', () => (flag = true));

  ctx.body = { status: 0, content: message.pending };
});

router.post('/api/process', async ctx => {
  ctx.body = { status: 0, flag, message: flag ? message.success : message.pending };

  if (flag) {
  }
});

app.use(router.routes(), router.allowedMethods());

const server = http.createServer(app.callback());
server.listen('3010', () => console.log('server is listen on port 3010'));

// serve static
function createStatic() {
  const serve = require('koa-static');
  app.use(async (ctx, next) => {
    ctx.set('Content-Security-Policy', 'frame-ancestors self http://localhost:3000');

    await next();
  });

  app.use(serve(__dirname + '/dist'));

  app.listen(6324);
}

createStatic();
