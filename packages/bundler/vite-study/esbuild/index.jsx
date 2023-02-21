import {render} from 'react-dom';

function App() {
    return <div>hello world</div>;
}

render(<App />, document.body.appendChild(document.createElement('div')));
// import Server from 'react-dom/server';

// let Greet = () => <h1>Hello, juejin!</h1>;
// console.log(Server.renderToString(<Greet />));
