import api from "../api";

const unLoggedGetPostListApi = () => {
  console.log('unLoggedGetPostListApi Call : ')
  const res = api.get('/post/unLogged')
  return res
}

const loggedGetPostListApi = () => {
  console.log('loggedGetPostListApi Call : ')
  const res = api.get('/post/logged')
  return res
}


export {unLoggedGetPostListApi, loggedGetPostListApi}