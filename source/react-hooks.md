### useState

```
useState 做了两件事
1. 拿到state1 state2 ...
2. 拿到setState1 setState2 ...

states 和 setters 从何而来？？
首次渲染会填充 states 和 setters
第二次开始直接取

states职责很单一，就是把state存起来
setters需要去存储setState(更新state + rerender)

借助变量index，可以在setState中定位到states[index] 的 state
```

```js
const [count, setCount] = useState(0);

const states = []; // 通过数组保存 state，源码用的是单向链表
const setters = []; // 通过 setters 保存 setState
const index = 0; // 通过 index 保存下标

function useState(initialState) {
  states[index] = states[index] ? states[index] : initialState;

  const createSetter = index => newState => {
    states[index] = newState;
    render();
  };
  setters.push(createSetter(index));

  index++;
  return [states[index], setters[index]];
}
```

### useEffect

```
useEffect副作用函数，监听state，处理state的更新

利用index，存储deps的位置
每次都判断一下deps的值和上一个deps是不是相等，来选择性执行callback
```

```js
let prevDeps = prevDepsArray[effectIndex];

let hasChanged = prevDeps ? deps.some((dep, index) => dep !== prevDeps[index]) : true;
if (hasChanged) {
  callback();
}

prevDepsArray[effectIndex] = deps;
effectIndex++;
```

### useReducer

```
useReducer 相当于一个对象类型的 useState，dispatch 可以理解成语义化的 setState(oldValue => newValue)
内部调用了useState
```

```js
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}
```
