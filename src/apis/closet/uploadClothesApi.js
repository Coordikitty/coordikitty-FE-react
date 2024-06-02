import api from "../api";

const uploadClothesApi = (data) => {
  console.log('uploadClothesApi : ', data)
  return api.post('/closet', data, {
    headers: {
      "Content-Type" : 'multipart/form-data'
    }
  })
}

export default uploadClothesApi