import api from '../api'

const signupApi = (data) => {
  console.log('signupApi Call')
  return api.post('/auth/signup', data)
}

export default signupApi