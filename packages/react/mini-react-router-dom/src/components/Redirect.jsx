import React, { Component } from 'react';
import { RouterContext } from './routerContext';

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { history } = context;

          // 做个跳转而已
          return <LifeCycle onMount={() => history.push(this.props.to)} />;
        }}
      </RouterContext.Consumer>
    );
  }
}

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
