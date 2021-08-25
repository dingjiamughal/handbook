const http = require('http');
const es = require('./elasticSearch');
const helmet = require('koa-helmet');
const bodyparser = require('koa-bodyparser');
const Koa = require('koa');

const app = new Koa();
app.use(es());
app.use(helmet());

app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));

// routes
const index = require('./routes');
app.use(index.routes(), index.allowedMethods());

function start() {
  http.createServer(app.callback()).listen('3002', () => console.log('server is listen on port 3002'));
}

start();
