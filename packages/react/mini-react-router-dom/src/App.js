import Route from './components/Route';
import Link from './components/Link';
import BrowserRoute from './components/BrowserRoute';
import Switch from './components/Switch';
import Redirect from './components/Redirect';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

function User() {
  return <div>User</div>;
}

// 测试 redirect
function Home() {
  return <div>Home</div>;
}

function DymaticCom(props) {
  const { id } = props.match.params;

  return (
    <div>
      <div>dymatic-{id}</div>
      <Link to="/dymatic/123/detail">详情 </Link>
      <div>
        <Route path="/dymatic/:id/detail" component={() => '详情内容'}></Route>
      </div>
    </div>
  );
}

export default App;
