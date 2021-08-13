import React, { useEffect, useState } from 'react';
import store from './store';
// import { Provider } from 'react-redux';
import { Provider } from './react-redux/Provider';
import Test from './Test';
import BB from './BB';
import tt from './tt';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setCount(count => count + 1); // 模拟 forceUpdate
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => store.dispatch({ type: 'ADD' })}>add</button>
      <button onClick={() => store.dispatch({ type: 'MINUS' })}>minus</button>
      <button
        onClick={() => {
          setTimeout(() => {
            store.dispatch({ type: 'ADD' });
          }, 1000);
        }}
      >
        async add
      </button>
      <div onClick={() => console.log(tt.getNum())}>{store.getState()}</div>
      <div onClick={() => tt.add()}>{count}</div>
      <BB />
      <div>--------------- mini react redux ----------------</div>
      <Provider store={store}>
        <Test msg="Hello" />
      </Provider>
    </div>
  );
}

export default App;
