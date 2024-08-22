import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/UserReducer";
import tokenRefreshApi from "./apis/auth/tokenRefresh";
function App() {

  const accessToken = sessionStorage.getItem('accessToken')
  const dispatch = useDispatch()

  useEffect(()=> {
    // FIXME!!! : 사용자의 프로필 정보를 받아오는 API로 변경해야 함
    if(accessToken) {
      ;(async() => {
        try {
          const res = await tokenRefreshApi()
          console.log("tokenRefreshApi res : ", res)
          dispatch(login({
            email : res.email,
            nickname : res.nickname,
          }))
          sessionStorage.setItem('accessToken', res.accessToken)
        } catch (error) {
          console.error(error)
        }
      })()
    }
  }, [accessToken, dispatch])

  return (
      <Container maxWidth="md" >
        <Header></Header>
        <Outlet></Outlet>
      </Container>
  );
}

export default App;
