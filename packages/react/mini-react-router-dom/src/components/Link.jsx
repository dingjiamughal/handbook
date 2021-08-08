import React, { Component } from 'react';
import { RouterContext } from './routerContext';

export default class Link extends Component {
  handleClick = (e, history) => {
    e.preventDefault();

    history.push(this.props.to);
  };

  render() {
    const { to, children } = this.props;
    return (
      <RouterContext.Consumer>
        {context => (
          <a href={to} onClick={e => this.handleClick(e, context.history)}>
            {children}
          </a>
        )}
      </RouterContext.Consumer>
    );
  }
}
