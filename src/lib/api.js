import axios from "axios";

// base URL backend
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// kirim token ke semua request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;