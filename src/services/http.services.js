//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.
import axios from "axios";

const interceptors = (token) => {
  return axios.interceptors.request.use(
    function (config) {
      config.headers = {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        "Content-Type": "application/json",
      };
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

const removeInterceptor = (interceptor) => {
  return axios.interceptors.request.eject(interceptor);
};

const removeAuthorization = () => {
  return delete axios.defaults.headers.common["Authorization"];
};

const post = (url = "", data = {}, config = {}) => {
  return axios.post(
    url,
    data,
    Object.assign(config, { timeout: 15 * 60 * 1000 })
  );
};

const get = (url = "", data = {}, config = {}) => {
  return axios(url, data, config);
};

const put = (url = "", data = {}, config = {}) => {
  return axios.put(url, data, config);
};

const del = (url = "", data = {}, config = {}) => {
  return axios.delete(url, { headers: config, data: data });
};

const HttpClient = {
  post,
  get,
  put,
  interceptors,
  del,
  removeAuthorization,
  removeInterceptor,
};

export { HttpClient };
