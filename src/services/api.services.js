import Cookies from "js-cookie";

import { HttpClient } from "./http.services";

import { history } from "../history";

const ApiRequestTypes = {
  get: "get",
  post: "post",
  del: "del",
  put: "put",
  interceptors: "interceptors",
  removeInterceptor: "removeInterceptor",
  removeAuthorization: "removeAuthorization",
};

// Set Login Headers
const headersConfigFormData = (data) => ({
  "Content-Type": "application/x-www-form-urlencoded",
  ...(data ? data : {}),
});

let instaInterceptor;
// Set Interceptors
const setInterceptors = (data) => {
  instaInterceptor = HttpClient[ApiRequestTypes.interceptors](data);
  return instaInterceptor;
};

// Remove  Interceptors
const removeInterceptors = () => {
  Cookies.remove("remotely_access_token");
  Cookies.remove("remotely_refresh_token");
  Cookies.remove("trial_banner_isclosed");

  return HttpClient[ApiRequestTypes.removeInterceptor](instaInterceptor);
};

// Remove Authorization
const removeAuthorization = () => {
  return HttpClient[ApiRequestTypes.removeAuthorization]();
};

// Get App Variables
const getAppVariables = (FacilityId) => {
  const url = `Account/GetStylesByFacility`;
  return HttpClient[ApiRequestTypes.get](url, { FacilityId });
};

//Create Refresh token Form Data
const createRefreshTokenFormData = () => {
  const formdata = new FormData();
  formdata.append("grant_type", "refresh_token");
  formdata.append("scope", "openid offline_access securityassessmentscope");
  formdata.append("client_id", "reactSPA");
  formdata.append("client_secret", "reactSPAsecret");
  formdata.append("refresh_token", Cookies.get("remotely_refresh_token"));
  return formdata;
};

// Auth Interface
const authInterface = (method, url, data) => {
  return HttpClient[method](url, data).catch((error) => {
    if (error?.response?.status === 401) {
      return callLogin(createRefreshTokenFormData())
        .then((resp) => {
          Cookies.set("remotely_access_token", resp?.data?.data?.access_token);
          Cookies.set(
            "remotely_refresh_token",
            resp?.data?.data?.refresh_token
          );
          if (resp?.data?.status === 200)
            return HttpClient[method](url, data ? data : null);
        })
        .catch(() => {
          clearCacheAndRedirectToLogin();
        });
    }
    return error;
  });
};

const clearCacheAndRedirectToLogin = () => {
  removeInterceptors();
  removeAuthorization();
  history.replace("/login");
  window.location.reload();
};

//Login
const callLogin = (data) => {
  const url = `authenticator/token`;
  return HttpClient[ApiRequestTypes.post](url, data, {
    headers: headersConfigFormData(),
  });
};

export const ApiService = {
  removeInterceptors,
  getAppVariables,
  setInterceptors,
  callLogin,
  removeAuthorization,
  createRefreshTokenFormData,
};
