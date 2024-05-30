import api from '../api'

const signupApi = (data) => {
  return api.post('/auth/signup', data)
}

export default signupApi