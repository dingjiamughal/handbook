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

// useEffect
let prevDepsArray: any[][] = [];
let effectIndex = 0;

function useEffect(callback: () => void, deps: any[]) {
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
function useReducer(reducer: (arg0: any, arg1: any) => any, initialState: any) {
    const [state, setState] = useState(initialState);

    function dispatch(action: any) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch];
}

// render
function render() {
    stateIndex = 0;
    effectIndex = 0;
    ReactDom.render(<App />, document.getElementById('root'));
}

// --------------------------------- App ---------------------------------

const createReducer = (state: any, action: {type: string; payload: string}) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload};
        case 'CHANGE_SEX':
            return {...state, sex: action.payload};
        default:
            return state;
    }
};
const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('dingjia');

    const [many, dispatch] = useReducer(createReducer, {
        name: 'jiading',
        sex: 'male'
    });

    useEffect(() => {
        // setName('dingjia' + count);
        console.log(count);
    }, [count]);

    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>setCount</button>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={() => setName('dingjia1')}>setName</button>
                <span>{name}</span>
            </div>
            <div>
                {many.name} {many.sex}
            </div>
            <button onClick={() => dispatch({type: 'CHANGE_NAME', payload: 'dddd'})}>change name</button>
            <button onClick={() => dispatch({type: 'CHANGE_SEX', payload: 'XXX'})}>change sex</button>
        </>
    );
};

render();
