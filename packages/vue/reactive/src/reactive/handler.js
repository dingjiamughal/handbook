import { reactive } from '.';
import { update } from '..';
import { statePool } from '../compile/state';
import { isObject } from '../utils';

export const mutableHandler = {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);

    console.log('observable get:', target[key]);

    // 深度响应式
    if (isObject(res)) {
      return reactive(res);
    }
    return res;
  },
  set(target, key, value, receiver) {
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
    update(statePool, key, value);
    return res; // true | false
  }
};
