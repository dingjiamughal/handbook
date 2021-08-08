export default function logger() {
  return dispatch => action => {
    console.log(action.type + '执行了');

    return dispatch(action);
  };
}
