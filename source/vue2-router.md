### vue 插件注册

```js
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{ path: '/', name: 'Index', component: Index }]
});

new Vue({ router, render: h => h(App) }).$mount('#root');
```

### VueRouter

- install 函数
- 注册 <router-link/> 和 <router-view />
- 把$router 挂载到 this

在 Vue.use 时进入 install 方法，install 做两件事

- 把$router 挂载到 this
- 初始化组件 + history 事件监听

```js
install(Vue) {
  // 每次 beforeEach 更新/添加 $router
  Vue.mixin({
    beforeCreate() {
      Vue.protoType.$router = this.$options.router; // $options 是 new Vue 的 options
      this.$options.router.init(); // this.$options.router 就是 new VueRouter
    }
  });
}

init() {
    // Vue.component <router-link/> 和 <router-view />
    // addEventListener history 事件
}
```
