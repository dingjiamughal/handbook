const router = require('koa-router')();
const ModelA = require('./modelA');

// 增
router.post('/api/week7', async ctx => {
  const data = await ModelA.create({ name: 'hello world' });

  ctx.body = { status: 0, content: data };
});

// 查
router.get('/api/week7', async ctx => {
  const data = await ModelA.find();
  ctx.body = { status: 0, content: data };
});

// 改
router.put('/api/week7/:id', async ctx => {
  const id = ctx.params.id;
  const { name } = ctx.request.body;

  const data = await ModelA.findByIdAndUpdate(id, { name });

  ctx.body = { status: 0, content: data };
});

// 删
router.get('/api/week7/:id', async ctx => {
  const id = ctx.params.id;

  const data = ModelA.Label.findByIdAndRemove(id);

  ctx.body = { status: 0, content: data };
});

module.exports = router;
