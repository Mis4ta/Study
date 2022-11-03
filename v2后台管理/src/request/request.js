import axios from "axios";

const instance = axios.create({
  baseURL: "http://xue.cnkdl.cn:23683",
  // 十秒之后超时
  timeout: 10000,
});
// 请求拦截器
instance.interceptors.request.use((config) => {
  return config;
}),
  (err) => {
    return Promise.reject(err);
  };
// 相应拦截器
instance.interceptors.response.use(
  (res) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return res.data;
  },
  function (err) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(err);
  }
);
export default instance;
