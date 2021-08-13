import Vue from 'vue';
import App from './App.vue';
import VueRouter from './vue-router';
import Home from './views/Home.vue';
import Car from './views/Car.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Button from './button-fork';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
// Vue.use(Button)

const router = new VueRouter({
  routes: [
    { path: '/home', name: 'Home', component: Home },
    { path: '/car', name: 'Car', component: Car }
  ]
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
