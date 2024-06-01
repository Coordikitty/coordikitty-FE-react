import axios from "axios";
import { Cookies } from "react-cookie";
import store from "../store";
import { refreshAccessToken } from "../redux/UserReducer";
// cookie 내용 가져오기
const cookies = new Cookies()

// axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})

// request에 대한 전처리
api.interceptors.request.use(
  (config) => {
    const token = store.getState().user.accessToken
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    } else {
      delete config.headers['Authorization']
    }
    return config
  },
  (error) => {
    Promise.reject(error)
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
      const refreshToken = cookies.get('refreshToken');
      if (refreshToken) {
        try {
          const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/auth/token', {
            refreshToken: refreshToken 
          })
          const newAccessToken = res.data.accessToken
          const newRefreshToken = res.data.refreshToken
          store.dispatch(refreshAccessToken(newAccessToken));
          cookies.set('refreshToken', newRefreshToken)
          api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
          console.log("eooeoeeo")
          return await api(originRequest);
        } catch (error) {
          throw error
        }
      }
      else {
        throw error
      }
    }
    else {
      throw error
    }
  }
)

export default api