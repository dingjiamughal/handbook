import Vue from 'vue';
import App from './App.vue';
import VueRouter from './vue-router';
import Home from './views/Home.vue';
import Car from './views/Car.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

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
