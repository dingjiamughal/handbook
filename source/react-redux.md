### redux

react-redux 属于 react 组件 <br>
状态管理管理是 redux，下面实现 redux 的 store

```js
// store 用法
const store = createStore(reducer, applyMiddleware(thunk, logger, ...));

// 页面调用
<button onClick={() => store.dispatch({ type: 'ADD' })}>add</button>
<div>{store.getState()}</div>
```

### 原理大概是

```js
function createStore() {
  let count = 0;

  const getCount = () => count;
  const add = () => (count = count + 1);

  return { getCount, add };
}

export const store = createStore();
```

需要实现 createStore 和 applyMiddleware，就是把上面的例子抽象出来 + 实现 rerender<br>
抛出 getState dispatch subscribe 和 实现组合中间件

### createStore

- getState => 返回 state
- dispatch => 更改 state
- subscribe => forceUpdate 实现组件 rerender

```js
function createStore(reducer, applyMiddleware) {
  // applyMiddleware 权重高 拦截
  applyMiddleware && applyMiddleware(createStore)(reducer);

  let state = undefined;
  let listeners = [];

  const getState => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener()); // 触发 rerender
  }

  const subscribe = callback => listeners.push(callback);

  dispatch({ type: '@init' });

  return { getState, dispatch, subscribe};
}
```

### react-redux 组件

```js
// Provide处理了一下store注入到了props中，根据调用反推
connect(mapStateToProps, mapDispatchToProps)(App);

function connect(mapStateToProps, mapDispatchToProps) {
    return function(WrapperComponent) => {
        return class extends Component {
            render() {
                return <WrapperComponent {...this.state.props}>
            }
        }
    }
}
```

封装组件，处理 props => newProps

- didmount 中注册 subscribe(update props)
- 执行 mapStateToProps mapDispatchToProps => 新的 props

```js
class ReduxWrapper extends Component {
  static contextType = StoreContext;

  constructor(props) {
    super(props);
    this.state = { props: {} };
  }

  // re render 的时机
  componentDidMount() {
    this.update();
    this.context.subscribe(() => this.update());
  }


  update = () => {
    const { getState, dispatch } = this.context;
    const stateProps = mapStateToProps(getState());

    let dispatchProps;

    if (typeof mapDispatchToProps === 'object') {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    } else if (typeof mapDispatchtoProps === 'function') {
      dispatchProps = mapDispatchtoProps(dispatch, this.props);
    } else {
      dispatchProps = { dispatch };
    }

    this.setState = {
      props: { ...stateProps, ...dispatchProps }
    };
  };

  return <WrapperComponent {...this.state.props}>
}
```
