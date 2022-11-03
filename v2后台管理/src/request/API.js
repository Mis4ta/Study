import instance from "@/request/request";

export const getUserData = () => instance.get("/prod-api/captchaImage");

export const getLoginAPI = (params) => instance.post("/prod-api/login", params);
