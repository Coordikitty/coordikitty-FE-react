import api from "./api"

const recommendApi = async(type, value, lat, lon) => {
  return await api.get('/recommend', {
    params : {
      type,
      
    }
  })
}