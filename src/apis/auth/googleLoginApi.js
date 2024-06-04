import api from "../api";

const googleLoginApi = () => {
  console.log('googleLoginApi Call')
  return api.get('/auth/login/google')
}

export default googleLoginApi