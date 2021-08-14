const path = require('path');
const fs = require('fs');
const Vue = require('vue');
const { createBundleRenderer } = require('vue-server-renderer');

const express = require('express');

const server = express();

const bundle = require(path.resolve(__dirname, '../dist/server/vue-ssr-server-bundle.json'));

const serverRender = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext
  template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8'), // 宿主文件
  clientManifest: require(path.resolve(__dirname, '../dist/client/vue-ssr-client-manifest.json')) // 客户端清单
});

const serveFavicon = require('serve-favicon');
server.use(serveFavicon(path.join(__dirname, '../public', 'favicon.ico')));

// 静态资源处理
server.use(express.static(path.resolve(__dirname, '../dist/client')), { index: false });

server.get('*', async (req, res) => {
  const context = {
    title: 'ssr-demo',
    url: req.url
  };

  const html = await serverRender.renderToString(context);

  res.send(html);
});

server.listen(8088);
