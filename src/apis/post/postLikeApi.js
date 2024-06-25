import api from '../api'

const postLikeApi = (postId) => {
  console.log('postLikeApi Call : ', postId)
  const res = api.post('/post/like', postId, {
    headers: {
      "Content-Type": 'application/json'
    }
  })
  return res
}

const postLikeCancelApi = (postId) => {
  console.log('postLikeCancelApi : ', postId)
  const res = api.put('/post/like',{
    
    headers: {
      "Content-Type": 'application/json'
    }
  })
  return res
}

export {postLikeApi, postLikeCancelApi}