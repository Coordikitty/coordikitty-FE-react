import api from "../api";

const getMyPostApi = () => {
  return api.get("/post/user");
};

export default getMyPostApi;
