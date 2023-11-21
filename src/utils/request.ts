import { message } from "antd";
import axios, { AxiosError } from "axios";
import { hideLoading, showLoading } from "./loading";
import storage from "./storage";
import env from "@/config/index";

const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  timeoutErrorMessage: "请求超时,请稍后重试",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    showLoading();
    const token = storage.get("token");
    if (token) {
      config.headers.Authorization = "Token: " + token;
    }
    if (env.mock === true) {
      config.baseURL = env.mockApi;
    } else {
      config.baseURL = env.baseApi;
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
      storage.remove("token");
      // location.href = "/login";
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
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, data: object): Promise<T> {
    return instance.post(url, data);
  },
};
