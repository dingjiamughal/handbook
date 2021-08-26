### 用法

```js
// store.js
export default createStore({ state, getters, mutations, actions });
// Page.vue
const store = useStore();
```

### createStore 和 useStore 通信

使用 Vue.provide 和 Vue.inject

和 react-redux 相似也是通过 context 形式传

```js
function createStore() {
  return new Store(options);
}

class Store {
  install(Vue, key) {
    Vue.config.globalProperties.$store = this;
    Vue.provide(key || 'app', this);
  }
}

function useStore(key = 'app') {
  return inject(key);
}
```

### Store

Store 实现 `state` `getters` `commit` `dispatch`

state 和 getters 要变成响应式，以确保组件的 update
