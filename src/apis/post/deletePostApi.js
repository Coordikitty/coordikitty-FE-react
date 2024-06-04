import api from "../api";

const deletePostApi = (postId) => {
  return api.delete('/post/delete', {
    params: {
      postId
    }
  })
}