import axios from 'axios';
import { getAuthToken } from './authToken';

const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8080/api/",
  headers: { 'Content-Type': 'application/json' }
});

axiosClient.interceptors.request.use(config => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
