import { createStore } from '../vuex';

export default createStore({
  state: {
    x: 1
  },
  getters: {
    xx(state) {
      return state.x + 5;
    }
  },
  mutations: {
    setX(state, payload) {
      state.x = payload;
    }
  },
  actions: {
    getX({ commit }, data) {
      setTimeout(() => {
        commit('setX', data);
      }, 1000);
    }
  }
});
