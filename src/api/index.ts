import axios from "axios";

const NO_TOKEN_ENDPOINTS = ["/auth/login", "/auth/signUp"];

const instance = axios.create({
  baseURL: "https://yariga.azurewebsites.net",
});

instance.interceptors.request.use((config) => {
  const requestUrl = config.url;
  if (!NO_TOKEN_ENDPOINTS.some((endpoint) => requestUrl?.includes(endpoint))) {
    const jwt = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

export default instance;
