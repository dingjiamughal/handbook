import { App, inject, InjectionKey, reactive } from 'vue';
import { StoreOptions, Store as VuexStore } from 'vuex';

class Store {
  vm: any;
  getters: any;
  mutations: any;
  state: any;
  actions: any;

  constructor(options: StoreOptions<any>) {
    const { state, getters, mutations, actions } = options;

    // state
    this.state = reactive(state);
    // getters
    this.getters = {};

    console.log(options);
    if (getters) {
      Object.keys(getters).forEach(key => {
        Object.defineProperty(this.getters, key, {
          get: () => {
            console.log(this.state);
            return getters[key](this.state);
          }
        });
      });
    }

    // mutations
    this.mutations = {};

    // 发布 - 订阅，初始化阶段把 function 存起来
    if (mutations) {
      Object.entries(mutations).forEach(([key, callback]) => {
        this.mutations[key] = (payload: any) => callback(this.state, payload);
      });
    }

    // actions
    this.actions = {};

    if (actions) {
      Object.entries(actions).forEach(([key, callback]) => {
        this.actions[key] = (data: any) => callback(this, data);
      });
    }
  }

  commit = (mutationType: string, payload: any) => {
    this.mutations[mutationType](payload);
  };

  dispatch = (actionType: string, data: any) => {
    this.actions[actionType](data);
  };

  // get state() {
  //   return this.vm;
  // }

  install(app: App<Element>, key: string) {
    app.config.globalProperties.$store = this;

    // 给调用的组件添加 store 实例，在组件中 useStore(key)
    app.provide(key || 'app', this);
  }
}

export function createStore<S>(options: StoreOptions<S>): VuexStore<S> {
  return new Store(options) as any;
}

export function useStore<S = any>(injectKey?: InjectionKey<VuexStore<S>> | string): VuexStore<S> {
  const injectValue = inject(injectKey || 'app') as VuexStore<S>;

  console.log(injectValue);
  return injectValue;
}
