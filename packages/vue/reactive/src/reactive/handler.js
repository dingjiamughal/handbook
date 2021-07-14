import { reactive } from '.';
import { isObject } from '../utils';

export const mutableHandler = {
  get: createGetter(),
  set: createSetter()
};

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);

    console.log('observable get:', target[key]);

    // 深度响应式
    if (isObject(res)) {
      return reactive(res);
    }
    return res;
  };
}

function createSetter() {
  return function set(target, key, value, receiver) {
    // 针对 arr.push 的兼容处理
    const isKeyExist = target.hasOwnProperty(key);
    const prevValue = target[key];

    const res = Reflect.set(target, key, value, receiver);

    if (!isKeyExist) {
      console.log('observable push: ' + value);
    } else if (value !== prevValue) {
      console.log('observable modify: ', key, value);
    }

    console.log('observable set:', key, value);
    return res; // true | false
  };
}
