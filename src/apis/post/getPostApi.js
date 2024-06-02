import api from "../api";

const getPostApi = (postId) => {
  console.log('getPostApi Call : ', postId)
  return api.get(`/post/${postId}`)
}

export default getPostApi