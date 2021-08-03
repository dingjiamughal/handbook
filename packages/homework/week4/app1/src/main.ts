import { ComponentOptionsBase, ComponentPublicInstance, createApp } from 'vue';
import App from './App.vue';

let app = null;
if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store);
  // 模拟登录后，存储用户信息到global module
  // const userInfo = { name: '我是独立运行时名字叫张三' }; // 假设登录后取到的用户信息
  // store.commit('global/setGlobalState', { user: userInfo });

  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);

  //   commonStore.globalRegister(store, props);

  render(props);
}

export async function unmount() {
  app.$el.innerHTML = '';
  app = null;
  //   app.$destroy();
  //   app.$el.innerHTML = '';
  //   app = null;
}

function render(props = {}) {
  const { container } = props;

  app = createApp(App).mount(container ? container.querySelector('#app') : '#app');
}
