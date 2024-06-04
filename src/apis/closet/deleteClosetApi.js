import api from "../api";

const deleteClosetApi = (clothId) => {
  console.log('deleteClosetApi Call : ', clothId)
  return api.delete('/closet', {
    params : {
      clothId
    }
  })
}

export default deleteClosetApi