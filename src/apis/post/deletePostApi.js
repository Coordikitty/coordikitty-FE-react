import api from "../api";

const deletePostApi = (postId) => {
  console.log('deletePostApi Call : ', postId)
  return api.delete('/post/delete', {
    params: {
      postId
    }
  })
}

export default deletePostApi