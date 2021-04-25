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
  ReactDom.render(<UseStatePro />, document.getElementById('root'));
}

const UseStatePro: React.FC = () => {
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

export default UseStatePro;
