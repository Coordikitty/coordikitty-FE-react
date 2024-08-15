import api from "../api";

const tokenRefreshApi = (data) => {
  console.log('tokenRefreshApi Call : ')
  const res = api.post('/auth/token', {}, {

  })
  return res
}

export default tokenRefreshApi