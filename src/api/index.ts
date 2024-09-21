import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',
  maxRedirects: 5,
});

instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${jwt}`;
  return config;
});

export default instance;
