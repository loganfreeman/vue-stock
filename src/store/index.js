import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import themePicker from "./modules/themePicker";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export const STORE_KEY = "VUE_STOCK";

export default new Vuex.Store({
  modules: {
    themePicker,
  },
  plugins: [
    createPersistedState({
      paths: ["themePicker"],
      key: STORE_KEY,
    }),
  ],
  strict: debug,
});
