import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Page1 from '@/pages/Page1';

export function createRouter() {
  return new VueRouter({
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/page1', name: 'Page1', component: Page1 }
    ]
  });
}
