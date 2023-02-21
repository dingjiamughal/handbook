import './setPublicPath';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Layout from './Layout.vue';
import Page1 from './page1.vue';
import Helloworld from './components/Helloworld.vue';
import Re from './re';
const routes = [
    {
        name: 'subApp1Layout',
        component: Layout,
        path: '/subapp1',
        children: [
            {
                name: 'page1',
                path: '/subapp1/page1',
                component: Page1
            }
        ]
    }
];

export {Helloworld};
export {Re};
const router = new VueRouter({mode: 'history', routes});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
