const http = require('http');
const request = require('./request');
const response = require('./response');
const context = require('./context');

// 主要练习一下洋葱模型(compose)
class KoaMini {
  constructor() {
    this.middlewares = [];
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      //   this.callback(req, res);
      const ctx = this.createContext(req, res);

      //   中间件 compose
      await this.compose(this.middlewares)(ctx);

      res.end(ctx.body);
    });

    return server.listen(...args);
  }

  use(callback) {
    this.middlewares.push(callback);

    return this;
  }

  //   对 ctx 封装
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);

    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;

    return ctx;
  }

  compose(middlewares) {
    return function (ctx) {
      return dispatch(0);

      function dispatch(i) {
        const fn = middlewares[i];

        if (!fn) {
          return Promise.resolve();
        }

        return Promise.resolve(
          fn(ctx, function next() {
            return dispatch(i + 1);
          })
        );
      }
    };
  }
}

module.exports = KoaMini;
