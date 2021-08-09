import React from 'react';
import { connect } from 'react-redux';

const Test = props => {
  console.log(props);
  return <div>{props.store}</div>;
};

const mapStatetoProps = (store, props) => {
  console.log(props);
  return { store };
};
export default connect(mapStatetoProps)(Test);
