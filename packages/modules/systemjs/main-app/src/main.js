import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';
// import {permission} from '@baidu/data-share';

// import Layout from './Layout.vue';
// import Page1 from './page1.vue';

// export const routes = [
//     {
//         name: 'subApp1Layout',
//         component: Layout,
//         path: '/subapp1',
//         children: [
//             {
//                 name: 'page1',
//                 path: '/subapp1/page1',
//                 component: Page1
//             }
//         ]
//     }
// ];

// const router = new VueRouter({mode: 'history', routes});
export const a = 1;
// Vue.use(VueRouter);

Vue.config.productionTip = false;
System.import('subapp1').then(r => console.log(r, 'subapp'));
System.import('@baidu/ergo-ui-vue2').then(r => console.log(r, 'ergo ui'));
// System.import('subapp1').then(r => console.log(r, 'subapp'));
// System.import('/js/app.js').then(r => console.log(r, 'self'));
// System.import('/js/chunk-vendors.js').then(r => console.log(r, 'vendor'));
// console.log(System);

new Vue({
    render: h => h(App)
}).$mount('#app');
