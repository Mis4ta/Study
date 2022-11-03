const navCollapse = {
  namespaced: true,
  state: {
    collapseIsShow: false,
  },
  getters: {},
  mutations: {
    changeCollapseIsShow(state, payload) {
      state.collapseIsShow = !state.collapseIsShow;
    },
  },
  actions: {},
};
export default navCollapse;
