export function createStore(reducer, applyMiddleware) {
  if (applyMiddleware) {
    return applyMiddleware(createStore)(reducer);
  }

  let currentState = undefined;
  let listeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    //   监听函数是一个数组，循环执行
    listeners.forEach(listener => listener());
  }

  function subscribe(callback) {
    //   每次订阅，放入回调数组
    listeners.push(callback);
  }

  //   createStore 第一次主动触发一次
  dispatch({ type: '@init' });

  return { getState, dispatch, subscribe };
}

export function applyMiddleware(...middlewares) {
  return createStore =>
    (...args) => {
      const store = createStore(...args);
      let dispatch = store.dispatch;

      const compose =
        (first, ...fns) =>
        (...args) =>
          fns.reduce((memo, next) => next(memo), first(...args));
      //   给dispatch
      const chain = middlewares.map(middleware =>
        middleware({
          getState: store.getState,
          dispatch: store.dispatch
        })
      );

      //   加强版的 dispatch
      dispatch = compose(...chain)(dispatch);

      return { ...store, dispatch };
    };
}

export function bindActionCreators(creators, dispatch) {
  return Object.keys(creators).reduce((memo, next) => {
    memo[next] = (...args) => dispatch(creators[next](...args));
    return memo;
  }, {});
}
