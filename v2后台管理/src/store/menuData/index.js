const menuData = {
  namespaced: true,
  state: {
    menuData: [],
  },
  mutations: {
    getUserInfo(state, payload) {
      console.log(payload);
      state.menuData = payload;
    },
  },
  actions: {},
};

export default menuData;
