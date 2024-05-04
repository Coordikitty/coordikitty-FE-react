import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import PostWrite from "./pages/PostWrite";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
const router = createBrowserRouter([
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
        path: "post/:post-id",
        errorElement: <div>wrong</div>,
        element: <Post></Post>
      },
      {// Post Write page
        path: "post-write",
        element: <PostWrite></PostWrite>
      },
      // ------------------------------- 

      // Account------------------------
      {
        path: "sign-up",
        element: <Signup></Signup>
      },
      {
        path: "my-page",
        element: <Mypage></Mypage>
      }
      // ------------------------------- 
    
    ]
  }
])

export default router