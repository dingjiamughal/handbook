import React, { useEffect, useState } from 'react';
import store from './store';
import tt from './tt';

export default function BB() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setNum(num => num + 1);
    });
  }, []);

  return <div onClick={() => tt.add()}>bb:{store.getState()}</div>;
}
