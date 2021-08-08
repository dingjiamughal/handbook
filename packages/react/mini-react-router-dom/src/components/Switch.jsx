import React, { Component } from 'react';
import matchPath from 'react-router-dom/matchPath';
import { RouterContext } from './routerContext';

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const location = this.props.location || context.location;
          // 只渲染第一个
          let el;
          let match;

          React.Children.forEach(this.props.children, child => {
            if (!match && React.isValidElement(child)) {
              el = child;
              const path = child.props.path;
              match = path ? matchPath(location.pathname, { ...child.props, path }) : context.match;
              // console.log(match, 'xxx');
            }
          });

          return match ? React.cloneElement(el, {}) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
