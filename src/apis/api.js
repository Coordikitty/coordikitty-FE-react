import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// request에 대한 전처리
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답에 대한 전처리
api.interceptors.response.use((res) => {
  return res.data;
});

export default api;
