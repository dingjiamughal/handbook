### vue-server-renderer

`vue-server-renderer` 文档：https://ssr.vuejs.org/zh

### createRenderer

createRenderer 允许 nodejs 中解析 vue 代码

```js
const { createRenderer } = require('vue-server-renderer');
const app = new Vue({
  template: '<div>{{text}}</div>',
  data() {
    return { text: '111' };
  }
});
server
  .get('/', (req, res) => {
    serverRender.renderToString(app).then(html => res.send(html));
  })
  .listen(8080);
```

`createRenderer` 只能完成渲染，事件监听需要`createBundleRenderer`

### createBundleRenderer

```js
const serverRender = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8'), // 宿主文件
  clientManifest: require(path.resolve(__dirname, '../dist/client/vue-ssr-client-manifest.json')) // 客户端清单
});
```
