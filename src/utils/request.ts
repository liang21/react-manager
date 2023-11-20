import { message } from "antd";
import axios, { AxiosError } from "axios";
import { hideLoading, showLoading } from "./loading";

const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  timeoutErrorMessage: "请求超时,请稍后重试",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    showLoading();
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Token: " + token;
    }
    return {
      ...config,
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    hideLoading();
    if (data.code === 0) {
      message.error(data.msg);
      localStorage.removeItem("token");
      location.href = "/login";
    } else if (data.code != 0) {
      message.error(data.msg);
      return Promise.reject(data);
    }
    return data.data;
  },
  (error) => {
    hideLoading();
    message.error(error.message);
    return Promise.reject(error.message);
  },
);
export default {
  get(url: string, params: any) {
    return instance.get(url, { params });
  },
  post(url: string, data: any) {
    return instance.post(url, data);
  },
};
