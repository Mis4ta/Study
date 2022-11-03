import Vue from "vue";
import VueRouter from "vue-router";
import layoutMain from "../views/layout/layoutMain.vue";
import { getUserInfoAPI } from "../request/API";
import store from "../store";
Vue.use(VueRouter);
// Vue.use(store);
const routes = [
  {
    path: "/",
    name: "home",
    component: layoutMain,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/login.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 管理系统常见的两个经典的逻辑
  let token = localStorage.getItem("AKA-authorization-token");
  // 1.如果用户访问登录页面,但是token已经存在,跳转到首页
  if (to.path == "/login" && token) {
    next("/"); //跳转到
    return;
  }
  // 2.如果用户访问的不是登录页面,但是没有token,跳转到登录页
  if (to.path != "/login" && !token) {
    next("/login"); //跳转到
    return;
  }

  if (token && store.state.menuData.menuData.length === 0) {
    let getUserInfoAPIRes = await getUserInfoAPI();
    // console.log(getUserInfoAPIRes.data);
    store.commit("menuData/getUserInfo", getUserInfoAPIRes.data);
  }
  next(); //方向
});
// 全局后置守卫
router.afterEach((to, from) => {
  document.title = to.meta.title;
});
export default router;
