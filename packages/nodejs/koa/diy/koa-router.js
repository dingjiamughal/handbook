class MiniRouter {
  constructor() {
    this.stack = [];
  }

  register(path, methods, middleware) {
    this.stack.push({ path, methods, middleware });
  }

  get(path, middleware) {
    this.register(path, 'get', middleware);
  }
  post(path, middleware) {
    this.register(path, 'post', middleware);
  }
  routes() {
    return async (ctx, next) => {
      const currentPath = ctx.request.url;

      const item = this.stack.find(item => currentPath === item.path && item.methods.includes(ctx.method));
      const route = item ? item.middleware : undefined;

      if (typeof route === 'function') {
        route(ctx, next);
        return;
      }
    };
  }
}

module.exports = MiniRouter;
