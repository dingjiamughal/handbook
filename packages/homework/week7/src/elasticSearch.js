const { Client } = require('elasticsearch');

function elasticsearch(opts = {}) {
  const { key = 'client' } = opts;

  const client = new Client(opts);

  const middleware = (ctx, next) => {
    ctx[key] = client;
    return next();
  };

  middleware.client = client;

  return middleware;
}

module.exports = elasticsearch;
