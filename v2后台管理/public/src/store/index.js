import Vue from "vue";
import Vuex from "vuex";
import navCollapse from "./navCollapse";
import menuData from "./menuData";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    navCollapse,
    menuData,
  },
});
