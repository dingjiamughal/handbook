import VueRouter from 'vue-router';
import Article from './Article.vue';

const router = new VueRouter({
  routes: [{ path: '/article/:id', component: Article, name: 'article' }]
});

export default router;
