import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabId: ''
  },
  mutations: {
    setTabId (state, payload) {
      state.tabId = payload;
    },
  },
  getters: {
    getTabId (state) {
      return state.tabId;
    },
  },
  actions: {
  },
  modules: {
  },
});
