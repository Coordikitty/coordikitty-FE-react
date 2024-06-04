import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/UserReducer";
import tokenRefreshApi from "./apis/auth/tokenRefresh";
function App() {

  const [cookies, setCookie] = useCookies(['refreshToken'])
  const accessToken = useSelector(state => state.user.accessToken) 
  const refreshToken = cookies.refreshToken
  const dispatch = useDispatch()

  useEffect(()=> {
    if(!accessToken && refreshToken) {
      ;(async() => {
        try {
          const res = await tokenRefreshApi({refreshToken})
          console.log("tokenRefreshApi res : ", res)
          dispatch(login({
            email : res.email,
            nickname : res.nickname,
            accessToken : res.tokenDto.accessToken
          }))
          setCookie('refreshToken', res.tokenDto.refreshToken)
        } catch (error) {
          console.error(error)
        }

      })()
    }
  }, [refreshToken])

  return (
      <Container maxWidth="md" >
        <Header></Header>
        <Outlet></Outlet>
      </Container>
  );
}

export default App;
