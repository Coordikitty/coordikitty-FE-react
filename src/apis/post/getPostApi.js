import api from "../api";

const getPostApi = (postId) => {
  console.log('getPostApi Call : ', postId)
  return api.get(`/post/get/${postId}`)
}

export default getPostApi