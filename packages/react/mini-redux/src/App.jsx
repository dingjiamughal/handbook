import React, { useEffect, useState } from 'react';
import store from './store';

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
      <div>{store.getState()}</div>
    </div>
  );
}

export default App;
