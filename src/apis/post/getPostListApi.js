import api from "../api";


const getPostListApi = () => {
  console.log('getPostListApi Call')
  const res = api.get('/post')
  return res
}

export default getPostListApi