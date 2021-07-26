完成响应式，并渲染 html 和 addEventListener

模板函数：

```js
{
    template: `<div>
        <div>{{ count }}</div>
        <div>{{ info.job }}</div>
        <button onClick="add(2)">+</button>
        <button onClick="minus(1)">-</button>
        <button onClick="changeJob('backend')">change job</button>
      </div>`,
    state,
    methods: {
      add,
      minus,
      changeJob
    }
};
```

- 通过`new Proxy` 把 `state` 变成 `reactive`
- 把花括号解析成 `text`，并产生标记，为了事件处理函数可以被 `proxy` 拦截，并改变某个 dom 的值
- 把 `onClick` 处理成事件处理函数

### step1: eventFormat 处理 onClick

```js
<button onClick="add(2)">点我+2</button>;

加上标识处理成:/
<button onClick="add(2)" data-v="xxxxxxxx">
  点我+2
</button>

然后把标识保存起来给后面addEventListener所用:/
eventPool.push({
  flag: randomNum(),
  handler: key.trim(), // add(2)
  type: 'click'
});
```

### step2: stateFormat 处理{{text}}

正则匹配 {{info.name}} 通过 state 解析 info.name，并 replace <br>
同样的，这里也需要 `data-v`，因为后期更新{{info.name}}，我需要找到当前这个 `div`,更改 `innerHTML` <br>
用一个 statePool 保存起来，被 update 所用

```js
加上标记data-v:
const _state=  {} // statePool 中保存的项
let index = 0; // 一个状态机，后面一定不会忘记这是啥的

// 处理 data-v
// 在 statePool 中添加 state 携带 data-v 信息
template = template.replace(/<(.+?)>\{\{(.+?)\}\}<\/.+?>/g, (node, tagName, key) => {
    const flag = randomNum(); // 给 addEventListener 定位 dom 用

    _state.state = flag;
    statePool.push(_state);
    state = {};

    return `<${tagName} data-v=${flag}>{{${key}}}</${tagName}>`;
});

// 处理{{info.name}}
template = template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    // 对于{{info.name}} 如何在 state {info: {name: 'dingjia'}} 取出 'dingjia'
    const stateArray = key.trim().split('.'); // ['info', 'name']
    let variables = state;

    let i = 0; // 状态机搞起
    while (i < stateArray.length) {
        variables = variables[stateArray[i]];
        i++;
    }

    statePool[index].state = stateArray; // 方便 update 通过 ['info', 'name'] 最后一项定位到 proxy set 的 k ey
    index++;
    // 此时 variables 为 dingjia
    return variables;
});
```

### bindEvent 事件绑定

上面完成了模板的编译，这里开始处理 addEventListener，借助 eventPool <br>

1. 遍历 Dom 和 eventPool
2. dom data-v 和 eventPool 的 flag 匹配
3. 匹配中了 addEventListener

```js
eventPool.forEach(event => {
  const element = [...document.getElementsByTagName('*')].find(element => {
    if (element.dataset.v === event.flag) {
      return element;
    }
    return null;
  });

  if (element) {
    element.addEventListener(
      event.type,
      function () {
        // 解析 event.handler: 'add(2)'
        const fnName = event.handler.match(/^(.*?)\(/)[1]; // add
        const args = event.handler.match(/\((.*?)\)/)[1]; // 2

        methods[fnName](transformArgs(args));
      },
      false
    );
  }
});
```

### reactive !!!

state 响应式，通知 dom update

```js
const state = reactive({
  name: 'dingjia',
  info: { job: 'fe' }
});

state.info.job = 'backend';

function reactive(state) {
  return new Proxy(state, {
    get: (target, key, receiver) => {
      const res = Reflect.get(target, key, receiver);

      // 深度
      if (isObject(res)) {
        return reactive(res);
      }
      return res;
    },
    set: (target, key, value, receiver) => {
      const res = Reflect.set(target, key, value, receiver);

      update(statePool, key, value);
      return res;
    }
  });
}
```

### update

在 Proxy 中，set 的时候需要 update，`statePool` 中存储了所有花括号信息(['info', 'name'], data-v)，需要对号入座找到 Dom

```js
export function update(statePool, key, value) {
  const allElements = document.getElementsByTagName('*');

  statePool.forEach(item => {
    if (item.state[item.state.length - 1] === key) {
      [...allElements].forEach(element => {
        if (+element.dataset.v === item.flag) {
          element.innerHTML = value;
        }
      });
    }
  });
}
```
