import api from "../api";

const getBookmarkedApi = () => {
  return api.get("/post/user/bookmark");
};

export default getBookmarkedApi;
