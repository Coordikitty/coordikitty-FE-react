import PostList from "../Post/PostList";
import getBookmarkedApi from "../../apis/post/getBookmarkedApi";
const Bookmark = () => {
  return <PostList getPostListApi={getBookmarkedApi}></PostList>;
};

export default Bookmark;
