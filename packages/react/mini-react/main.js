import { Component, render, createElement } from './mini-react';

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      a: 1,
      b: 2
    };
  }
  render() {
    return (
      <div>
        <div>my component</div>
        <button
          onClick={() => {
            // this.state.a++;
            // this.rerender();
            this.setState({ a: 3 });
          }}
        >
          add
        </button>
        <span>{this.state.a.toString()}</span>
        <span>{this.state.b.toString()}</span>
        {this.children}
      </div>
    );
  }
}

const dom = (
  <MyComponent class="aaa" id="bbb">
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </MyComponent>
);

render(dom, document.body);
