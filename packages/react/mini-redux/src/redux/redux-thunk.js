export default function thunk({ getState }) {
  return dispatch => action => {
    // action 可以是对象也可以是函数
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
  };
}
