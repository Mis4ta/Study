import instance from "@/request/request";
// 获取验证码
export const getUserData = () => instance.get("/prod-api/captchaImage");

export const getLoginAPI = (params) => instance.post("/prod-api/login", params);
// 获取路由信息
export const getUserInfoAPI = () => instance.get("/prod-api/getRouters");
