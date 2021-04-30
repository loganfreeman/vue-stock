import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export const STORE_KEY = "VUE_STOCK";

export default new Vuex.Store({
  modules: {},
  plugins: [
    createPersistedState({
      paths: [],
      key: STORE_KEY,
    }),
  ],
  strict: debug,
});
