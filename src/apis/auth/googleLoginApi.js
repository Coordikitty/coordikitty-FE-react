import api from "../api";

const googleLoginApi = (data) => {
  console.log('googleLoginApi Call', data)
  return api.post('/auth/login/google', data)
}

export default googleLoginApi