import { createBrowserRouter, createHashRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import PostWrite from "./pages/PostWrite";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Guard from "./pages/Guard";

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      // Home page ---------------------
      {
        index: true,
        element: <Home></Home>
      },
      // -------------------------------

      // Post --------------------------
      {// Posts page
        path: "posts",
        element: <Posts></Posts>
      },
      {// Post page
        path: "post/:postId",
        element: <Post></Post>
      },
      // postId가 없는 경우에 대한 리다이렉트 설정
      {
        path: "post/",
        element: <Navigate to="/posts" replace />
      },
      {// Post Write page
        path: "post-write",
        element: <Guard><PostWrite></PostWrite></Guard>
      },
      // ------------------------------- 

      // Account------------------------
      {
        path: "sign-up",
        element: <Signup></Signup>
      },
      {
        path: "my-page",
        element: <Guard><Mypage></Mypage></Guard>
      }
      // ------------------------------- 
    
    ]
  }
])

export default router