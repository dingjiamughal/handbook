import React from 'react';
import ReactDom from 'react-dom';

let state: any[] = [];
let setters: Function[] = [];
let stateIndex = 0;

function createSetter(index: number) {
  return function (newState: any) {
    state[index] = newState;
    render();
  };
}

function useState(initialState: any) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  setters.push(createSetter(stateIndex));

  const stateHook = [state[stateIndex], setters[stateIndex]];
  stateIndex++;

  return stateHook;
}

function render() {
  stateIndex = 0;
  effectIndex = 0;
  ReactDom.render(<App />, document.getElementById('root'));
}

// useEffect
let prevDepsArray = [];
let effectIndex = 0;
function useEffect(callback, deps) {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('callback is not a function');
  }
  if (typeof deps === 'undefined') {
    callback();
  } else {
    if (!(deps instanceof Array)) {
      throw new Error('deps is not a array');
    }

    let prevDeps = prevDepsArray[effectIndex];
    // 判断和上一次 dep 是否相同
    // 例如 name => name1
    let hasChanged = prevDeps ? deps.every((dep, index) => dep === prevDeps[index]) === false : true;

    if (hasChanged) {
      callback();
    }

    prevDepsArray[effectIndex] = deps;
    effectIndex++;
  }
}

// useReducer
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('dingjia');

  return (
    <>
      <div>
        <span onClick={() => setCount(count + 1)}>setCount</span>
        <span>{count}</span>
      </div>
      <div>
        <span onClick={() => setName('dingjia1')}>setName</span>
        <span>{name}</span>
      </div>
    </>
  );
};

export default App;
