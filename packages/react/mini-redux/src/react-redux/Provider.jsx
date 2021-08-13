import React, { Component } from 'react';
import { bindActionCreators } from '../redux';

const StoreContext = React.createContext();

// connect 是 <Provider /> 下的一小只
export const connect = (mapStatetoProps, mapDispatchtoProps) => WrapperComponent => {
  return class extends Component {
    static contextType = StoreContext;

    constructor(props) {
      super(props);
      this.state = {
        props: {}
      };
    }

    componentDidMount() {
      const { subscribe } = this.context;
      this.update();

      subscribe(() => this.update());
    }

    update = () => {
      const { dispatch, getState } = this.context;
      let stateProps = mapStatetoProps(getState());

      let dispatchProps;
      // {add: () => ({type: 'ADD'})}
      if (typeof mapDispatchtoProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchtoProps, dispatch);
      }
      //   (dispatch, ownProps) => {}
      else if (typeof mapDispatchtoProps === 'function') {
        dispatchProps = mapDispatchtoProps(dispatch, this.props);
      } else {
        dispatchProps = { dispatch };
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      });
    };

    render() {
      // 把 dispatch 注入到组件 props
      console.log(this.context);
      return <WrapperComponent {...this.state.props} />;
    }
  };
};

export class Provider extends Component {
  render() {
    return <StoreContext.Provider value={this.props.store}>{this.props.children}</StoreContext.Provider>;
  }
}
