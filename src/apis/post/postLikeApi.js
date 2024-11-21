import api from "../api";

const postLikeApi = (postId) => {
  console.log("postLikeApi Call : ", postId);
  const res = api.post(
    "/post/like",
    { postId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export default postLikeApi;
