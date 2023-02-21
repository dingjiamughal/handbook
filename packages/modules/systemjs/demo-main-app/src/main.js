import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

export const a = 1;

Vue.config.productionTip = false;
System.import('subapp1').then(r => console.log(r, 'subapp'));

new Vue({
    render: h => h(App)
}).$mount('#app');
