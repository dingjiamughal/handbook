import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from './react-redux/Provider';

const Test = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.add()}>{props.store}</button>
    </div>
  );
};

const mapStatetoProps = (store, props) => {
  console.log(props);
  return { store };
};

const mapDispatchtoProps = dispatch => {
  const res = bindActionCreators(
    {
      add: () => ({ type: 'ADD' }),
      minus: () => ({ type: 'MINUS' })
    },
    dispatch
  );
  return { dispatch, ...res };
};
export default connect(mapStatetoProps, {
  add: () => ({ type: 'ADD' })
})(Test);
