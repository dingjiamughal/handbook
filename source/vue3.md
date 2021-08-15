### vue3

简单版本思路：实现对组件函数的渲染、更新、事件绑定

```js
function App() {
  const state = reactive({ name: 'dingjia' });
  const handleClick = name => (state.name = name);

  return {
    template: `<button onClick="handleClick('dj')">{{name}}</button>`,
    state,
    methods: { handleClick }
  };
}
```

> 把 state 变成响应式

- get 中处理成响应式
- set 中执行 update

```js
new Proxy(state, {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);

    // 深度响应式
    if (isObject(res)) {
      return reactive(res);
    }

    return res;
  },
  set(target, key, value, receiver) {
    // 省略了针对数据以及前后数据相同的情况...
    const res = Reflect.set(target, key, value, receiver);
    update(statePool, key, value);
    return res; // true | false
  }
});
```

> 解析事件 onClick

eventPool 存放事件，给 dom 节点设置 data-v

```js
template.replace(/onClick\="(.*?)"/g, (node, key) => {
  const flag = Math.random();
  eventPool.push({ flag, handler: key, type: click });

  return `data-v=${flag}`;
});
```

> 解析 state

statePool 存放{{state}} <br>
目的从 state: {a: {b: {c:1}}} 中替代 {{state.a.b.c}}

> update

data-v 和两个 pool 做映射

> bindEvent

遍历 eventPool

### 依赖收集 Dep

上面的 update 操作方式是 proxy set 中做全量更新，不可取 <br>
依赖收集 => 增量 update<br>
`watcher` `dep` 每一个 node 更新对应一个 watcher，每一个 state.key 对应一个 dep<br>
`watcher`是一对一 update，`dep`是一对多`watcher`

每一个 state.key 对应一个 dep：

```js
// defineProperty 或者 new Proxy 最终会被递归调用，深度扫描state.key
const dep = new Dep();
Object.defineProperty(target, key, {
  get() {
    dep.addDep(Dep.target);
  }
  set() {
    dep.notify();
  }
});


class Dep {
  constructor() {
    this.deps = []; // deps 中每一项都是 watcher
  }
  addDep(dep) {
    this.deps.push(dep);
  }
  notify() {
    this.deps.forEach(dep => dep.update());
  }
}
```

一个 node 对应一个 watcher：

```js
class Watcher {
  constructor(vm, key, fn) {
    this.vm = vm;
    this.key = key;
    this.fn = fn;

    // 源码叫 target
    Dep.target = this;
    // 为了触发一下响应式的 getter
    this.vm[this.key];
    Dep.target = null;
  }

  update() {
    this.fn.call(this.vm, this.vm[this.key]);
  }
}
```

首次渲染每一个 node 都会触发一次 updata，每一次都会 `new Watcher`，在 Watcher 中会触发一次 getter 并让`Dep.target=this`，最关键的！！！在`defineReactive`闭包中存放了一个 dep，每个 dep push 了一次 Dep.target 即 this 即一个 watcher，对应一个`update node`方法<br>

总之，一个 node 对应一个 watcher，一个 state.key 对应一个 dep <br>
watcher 中赋值 dep，并触发 getters=>addDep，等下一轮遍历到新的 key，又是一个 new Dep，循环上述<br>
最终更新函数会在 setter 中，dep.notify 的方式调用
