/* api配置文件 */

import axios from "axios";
import store from "@/store";

const request = axios.create({
  // 基础api
  baseURL: "http://ttapi.research.itcast.cn"
});

/* 请求拦截器 */
// Add a request interceptor
request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const { user } = store.state;
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default request;
