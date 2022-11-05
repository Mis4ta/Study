import axios from "axios";
import { Message } from "element-ui";
import router from "@/router";
const instance = axios.create({
  baseURL: "http://xue.cnkdl.cn:23683",
  // 十秒之后超时
  timeout: 10000,
});
// 请求拦截器
instance.interceptors.request.use((config) => {
  let token = localStorage.getItem("AKA-authorization-token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
}),
  (err) => {
    return Promise.reject(err);
  };
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let res_data = res.data;
    if (res_data.code != 200) {
      // token值过期
      if(res_data.code ==401){
        localStorage.removeItem("AKA-authorization-token")
        router.push("./login")
        Message({
          message: "登录信息认证已过期,请重新登录",
          type: "error",
        });
        return
      }
      Message({
        message: res_data.msg ? res_data.msg : "网络请求失败",
        type: "error",
      });
      return false;
    }
    return res.data;
  },
  function (err) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(err);
  }
);
export default instance;
