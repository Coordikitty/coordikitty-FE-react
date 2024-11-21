import api from "../api";

const postBookmarkApi = (postId) => {
  console.log("postBookmarkApi Call : ", postId);
  const res = api.post("/post/bookmark", postId, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export default postBookmarkApi;
