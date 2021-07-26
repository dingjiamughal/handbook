let selfEffect;

class Dep {
  constructor(val) {
    this.effects = new Set();
    this._val = val;
  }

  get value() {
    this.depend();
    return this._val;
  }

  set value(newVal) {
    this._val = newVal;
    this.notice();
  }

  // 依赖收集
  depend() {
    if (selfEffect) {
      this.effects.add(selfEffect);
    }
  }
  // 依赖触发
  notice() {
    this.effects.forEach(effect => effect());
  }
}

export function watchEffect(effect) {
  selfEffect = effect;
  effect();
  selfEffect = null;
}

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key, value) {
      const dep = getDep(target, key);

      // 依赖收集
      dep.depend();

      return Reflect.get(target, key);
    },
    set(target, key, value, receiver) {
      const dep = getDep(target, key);
      const result = Reflect.set(target, key, value);
      dep.notice();

      return result;
    }
  });
}

const targetMap = new Map();

function getDep(target, key) {
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}
