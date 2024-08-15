import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})

// request에 대한 전처리
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    } else {
      delete config.headers['Authorization']
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답에 대한 전처리
api.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (error) => {
    const originRequest = error.config
    if (error.response.status === 401 && !originRequest._retry) {
      originRequest._retry = true
      try {
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/auth/token')
        const newAccessToken = res.data.accessToken
        sessionStorage.setItem('accessToken', newAccessToken)
        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
        return await api(originRequest);
      } catch (error) {
        return Promise.reject(error)
      }
    } else {
      return Promise.reject(error)
    }
  }
)

export default api