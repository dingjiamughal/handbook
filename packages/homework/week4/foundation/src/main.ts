import { createApp } from 'vue';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import microApps from './micro-app';
import App from './App.vue';

const instance = createApp(App).mount('#app');

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
// function loader(loading) {
//   if (instance && instance.$children) {
//     // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
//     instance.$children[0].isLoading = loading;
//   }
// }

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item
    // loader
  };
});

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name);
    // return Promise.resolve();
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      //   return Promise.resolve();
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
      //   return Promise.resolve();
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      //   return Promise.resolve();
    }
  ]
});
setDefaultMountApp('/sub-vue');
start();