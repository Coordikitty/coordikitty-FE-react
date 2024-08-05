import api from "../api";


const getPostListApi = (page) => {
  console.log('getPostListApi Call', page)
  const res = api.get('/post')
  return res
}

export default getPostListApi