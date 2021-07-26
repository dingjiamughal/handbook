import { handler } from './handler';
import { isObject } from '../utils';

function createReactiveObject(target, baseHandler) {
  if (!isObject(target)) {
    return target;
  }

  const observer = new Proxy(target, baseHandler);
  return observer;
}

export function reactive(target) {
  return createReactiveObject(target, handler);
}
