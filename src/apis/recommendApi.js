import api from "./api"

const recommendApi = (type, value, lat, lon) => {
  console.log('recommendApi Call :', type, value, lat, lon)
  return api.get('/recommend', {
    params : {
      type,
      value,
      lat,
      lon
    }
  })
}

export default recommendApi