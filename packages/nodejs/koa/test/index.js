const KoaMini = require('../diy');

const app = new KoaMini();

const sleep = () => new Promise((resolve, reject) => resolve(), 1000);

app
  .use(async (ctx, next) => {
    console.log('fn1');
    ctx.body = '1';

    await next();
    console.log('fn1 end');
    ctx.body += '2';
  })
  .use(async (ctx, next) => {
    console.log('fn2');
    ctx.body += '3';

    sleep();
    await next();
    console.log('fn2 end');
    ctx.body += '4';
  })
  .use(async ctx => {
    console.log('fn3');
    ctx.body += '5';
  })
  .listen(3009);
