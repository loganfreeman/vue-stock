const state = {
  theme: 'light'
};

const mutations = {
  setDarkTheme(state) {
    state.theme = 'dark';
  },
  setLightTheme(state) {
    state.theme = 'light';
  }
};

const getters = {
  theme: state => state.theme
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
