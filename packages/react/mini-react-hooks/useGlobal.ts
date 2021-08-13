import { useState, useEffect } from 'react';

function creatMonitor() {
  let list = [];

  function emit(fn) {
    list.push(fn);
  }

  function on(...args) {
    return Promise.all(list.map(fn => fn(...args)));
  }

  function remove(fn) {
    list = list.filter(item => item === fn);
  }

  function removeAll() {
    list = [];
  }

  return { remove, removeAll, on, emit };
}

export default function createGlobal<S = any>(cache?: boolean) {
  const monitor = creatMonitor();
  let stateCache: any;

  function useGlobalState(defaultS?: S) {
    const [state, setStateNative] = useState<S>(stateCache || defaultS);

    function setState(newState: S) {
      if (cache) {
        stateCache = newState;
      }
      monitor.on(newState);
    }

    useEffect(() => {
      stateCache = state;
      const set = newState => {
        setStateNative(newState);
      };
      monitor.emit(set);
      return () => {
        monitor.remove(set);
      };
    }, []);

    return [state, setState] as [typeof state, typeof setState];
  }

  return useGlobalState;
}
