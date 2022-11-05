import Vue from "vue";
import VueRouter from "vue-router";
import layoutMain from "../views/layout/layoutMain.vue";
import { getUserInfoAPI } from "../request/API";
import store from "../store";
Vue.use(VueRouter);
// Vue.use(store);
const routes = [
  {
    redirect:"/home",
    path: "/",
    name: "index",
    component: layoutMain,
    meta: {
      title: "首页",
    },
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
    console.log(getUserInfoAPIRes);
    let ret = getUserInfoAPIRes.data.map((item) => {
      if (item.children) {
        return {
          title: item.meta.title,
          path: item.path,
          icon : item.meta.icon,
          children: item.children.map((sitem) => {
            return {
              title: sitem.meta.title,
              path: item.path + "/" + sitem.path,
              name:sitem.name,
            };
          }),
        };
      } else {
        return {
          title: item.meta.title,
          path: item.path,
        };
      }
    });
    let ind = [
      {
        title: "首页",
        path: "/",
        icon : "bug",
      },
    ];
    let newArr = [...ind, ...ret];
    // 传值到vuex
    store.commit("menuData/getUserInfo", newArr);
    // 动态写入路由
   
   let AllPath= [{
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../components/HelloWorld.vue"),
    }]
     // 首先遍历数据
    getUserInfoAPIRes.data.forEach((item)=>{
      // 改变数组
        let ChildPath =item.children.map((sitem)=>{
          return {
            path: item.path +"/"+sitem.path,
            name: sitem.name,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(/* webpackChunkName: "about" */ `../components${item.path}/${sitem.name}.vue`),
          }
        })
        // 合并数组
        AllPath=[...AllPath,...ChildPath]
    })
  
    // 动态路由只支持对象写法,所以要遍历
    AllPath.forEach(item=>{
      router.addRoute("index",item)
    })
    // 如果不写to.path ,路由还没有完整,还是个空的
    // 加了to.path之后,会重新走一边路由守卫,此时路由添加完毕,可以检查出用户能不能访问路径
    next(to.path);
    return
  }
  next(); //方向
});
// 全局后置守卫
router.afterEach((to, from) => {
  document.title = to.meta.title;
});
export default router;
