### 洋葱圈模型

```js
app.use('a', async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use('b', async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});
```

use 负责添加到中间件队列 <br>
listen 中调用 middlewares

```js
// use 添加队列
this.middlewares.push(callback);
// listen 执行队列方法
this.compose(this.middlewares)(ctx);
```

### compose 实现

```js
function compose(middlewares) {
  return function (ctx) {
    return dispatch(0); // 首次手动执行第0次调度 dispatch(0)

    function dispatch(i) {
      if (!middlewares[i]) {
        return Promise.resolve();
      }

      return Promise.resolve(
        middlewares[i](ctx, function next() {
          return dispatch[i + 1];
        })
      );
    }
  };
}
```

核心代码理解

```js
// 实现上一个函数的返回值 => 当前函数参数
// next 参数位置填上下一个函数
middlewares[i](ctx, function next() {
  return dispatch[i + 1];
});
```
