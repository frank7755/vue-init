import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";
import { getToken } from "@/utils/auth";
import { router } from "@/main";
// import store from "@/store";

const instance = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const httpCode: any = {
  400: "请求参数错误",
  401: "登录过期，请重新登录",
  403: "服务器拒绝访问",
  404: "请求资源未找到",
  500: "内部服务器错误",
  501: "服务器不支持该方法",
  502: "网关错误",
  503: "网关超时",
};

/**请求拦截器 */
instance.interceptors.request.use(
  (config: any) => {
    config.headers["Authorization"] = getToken();

    return config;
  },
  (error: any) => {
    ElMessage.error("请求失败!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      ElMessage.error("请求超时!");
      return Promise.resolve(response);
    }
  },
  (error: any) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        ElMessage({ message: "登录过期，请重新登录", type: "error" });
      } else {
        ElMessage.error(httpCode[error.response.status]);
      }
      return Promise.reject(error);
    } else {
      ElMessage.error("请求超时,请重试!");
      return Promise.resolve(error);
    }
  }
);

type requestOption = {
  method?: string;
  headers?: any;
  responseType?: string;
};

/**
 * 请求方式默认get,其他方式需要在options里配置
 * @param url 请求地址
 * @param params 请求参数，非必填
 * @param options 请求配置
 */
const request = (url: string, params?: any, options?: requestOption) => {
  let config: any = {
    url: url,
    params: params ? (params ? params : undefined) : undefined,
    data: options ? (params ? qs.stringify(params) : undefined) : undefined,
    ...options,
  };

  if (options?.method && options?.method.toUpperCase() != "GET") {
    delete config.params;
  } else {
    delete config.data;
  }

  return new Promise((resolve, reject) => {
    instance(config)
      .then((res: any) => {
        if (res.code === 200) {
          resolve(res);
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export default request;
