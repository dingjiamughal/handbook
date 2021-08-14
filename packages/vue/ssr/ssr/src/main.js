import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRouter } from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export function createApp(_context) {
  const router = createRouter();

  const app = new Vue({
    render: h => h(App),
    router
  }).$mount('#app');

  return { app, router };
}
