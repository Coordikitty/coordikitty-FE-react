import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostWrite from "./pages/PostWrite";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Guard from "./pages/Guard";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      // Home page ---------------------
      {
        index: true,
        element: <Home></Home>,
      },
      // -------------------------------

      // Post --------------------------
      {
        // Posts page
        path: "posts",
        element: <PostPage></PostPage>,
      },
      {
        // Post page
        path: "post/:postId",
        element: <Post></Post>,
      },
      {
        path: "post/",
        element: <Navigate to="/posts" replace />,
      },
      {
        // Post Write page
        path: "post-write",
        element: (
          <Guard>
            <PostWrite></PostWrite>
          </Guard>
        ),
      },
      // -------------------------------

      // Account------------------------
      {
        path: "sign-up",
        element: <Signup></Signup>,
      },
      {
        path: "my-page",
        element: <Mypage></Mypage>,
      },
      // -------------------------------
      {
        path: "user-page/:userEmail",
        element: <UserPage></UserPage>,
      },
      {
        path: "user-page",
        element: <Navigate to="/my-page" replace />,
      },
    ],
  },
]);

export default router;
