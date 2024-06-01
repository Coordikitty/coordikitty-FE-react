import api from "../api";

const tokenRefreshApi = (data) => {
  console.log('tokenRefreshApi Call : ', data)
  const res = api.post('/auth/token', data)
  return res
}

export default tokenRefreshApi