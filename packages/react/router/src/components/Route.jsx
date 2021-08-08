import React, { Component } from 'react';
import { RouterContext } from './routerContext';
import matchPath from 'react-router-dom/matchPath';

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { path, children, component, render } = this.props;

          const location = this.props.location || context.location;

          const match = matchPath(location.pathname, this.props);

          console.log(match);

          const props = { ...context, location, match };

          let com;
          // 如果有 match 渲染 children/component/render
          if (match) {
            // children 优先级最高
            if (children) {
              com = typeof children === 'function' ? children(props) : children;
            }
            // component 优先级第二
            else if (component) {
              com = React.createElement(component, props);
            }
            // render 优先级第三
            else {
              com = render ? render(props) : null;
            }
          } else {
            com = typeof children === 'function' ? children(props) : null;
          }

          return <RouterContext.Provider value={props}>{com}</RouterContext.Provider>;
        }}
      </RouterContext.Consumer>
    );
  }
}
