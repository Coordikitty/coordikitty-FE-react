import api from "../api";

const postUploadApi = (data) => {
  console.log('postUploadApi Call : ', data)
  const res = api.post('/post/upload', data)
  return res
}

export default postUploadApi