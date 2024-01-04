import axios from "axios";

const instance = axios.create({
  baseURL: "https://yariga.azurewebsites.net",
  timeout: 10000,
});

export default instance;
