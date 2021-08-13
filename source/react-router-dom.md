## react-router-dom

```jsx
<BrowserRoute>
  <Link to="/">首页 </Link>
  <Link to="/user">用户 </Link>
  <Link to="/render">render </Link>
  <Link to="/children">children </Link>
  <Link to="/dymatic/123">动态路由 </Link>
  <Link to="/redirect">redirect</Link>

  <div>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/render" render={() => '我是render'}></Route>
      <Route path="/children">我是 children </Route>
      <Route path="/dymatic/:id" component={DymaticCom}></Route>
      <Route path="/redirect">
        <Redirect to={{ pathname: '/user' }} />
      </Route>
    </Switch>
  </div>
</BrowserRoute>
```

`BrowserRoute` `Switch` `Link` `Route` `Redirect` 5 个组件

### BrowserRoute

```js
// 1. 通过 context 传递 `history` 和 `location`，4 个组件 Consumer 接住
// 2. 注册listen事件，以取消a标签的默认行为

this.history.listen(location => this.setState(location));

<Provider value={{ history: this.history, location: this.state.location }}></Provider>;
```

### Link

```js
interface Iprops {
  to: string;
}

<Consumer>
  {context => (
    <a
      onClick={e => {
        e.preventDefault();
        context.history.push(this.props.to);
      }}
    >
      {children}
    </a>
  )}
</Consumer>;
```

### Route

`Route` 负责渲染组件，并把一些路由信息透传下去

```js
// route接收三种slot的方式 slot render component
<Consumer>
  {context => {
    const { children, component, render } = this.props;

    let com;
    // children 优先级最高
    if (children) {
      com = children;
    }
    // component 优先级第二
    else if (component) {
      com = React.createElement(component, props);
    }
    // render 优先级第三
    else {
      com = render ? render(props) : null;
    }

    return <Provider value={props}>{com}</Provider>;
  }}
</Consumer>
```

接着加上一些处理后的路由参数

```js
const location = this.props.location || context.location;
const match = matchPath(location.pathname, this.props);

const props = { ...context, location, match };
```

### Redirect

`Redirect` 做一个跳转

```js
<Consumer>
  {context => {
    // 做个跳转
    return <LifeCycle onMount={() => context.history.push(this.props.to)} />;
  }}
</Consumer>;

class LifeCycle extends Redirect {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return null;
  }
}
```

### Switch

`Switch` 组件搭配 `exact` 锁定第一个组件
循环 `React.children` 判断 location 和组件 是否 match，渲染 match 的那一个组件，相当于在 Route 上层做了一层拦截

```js
React.Children.forEach(this.props.children, child => {
  if (!match && React.isValidElement(child)) {
    el = child;
    const path = child.props.path;
    match = path ? matchPath(location.pathname, { ...child.props, path }) : context.match;
  }
});

return match ? React.cloneElement(el, {}) : null;
```
