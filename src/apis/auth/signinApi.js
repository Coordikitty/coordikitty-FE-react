import api from "../api";

const signinApi = (data) => {
  console.log('signinApi Call : ', data)
  const res = api.post('/auth/login', data)
  return res
}

export default signinApi