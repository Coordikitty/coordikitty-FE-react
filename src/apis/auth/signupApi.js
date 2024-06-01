import api from '../api'

const signupApi = (data) => {
  console.log('signupApi Call : ', data)
  const res = api.post('/auth/signUp', data)
  return res
}

export default signupApi