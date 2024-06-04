import api from "../api";

const getClosetApi = () => {
  console.log('getClosetApi Call')
  return api.get('/closet')
}

export default getClosetApi