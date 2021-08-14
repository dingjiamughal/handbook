import { createApp } from './main';

export default context => {
  // 返回 promise 确保异步都结束
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);

    // 首屏处理
    router.push(context.url);

    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
