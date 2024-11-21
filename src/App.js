import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/UserReducer";
function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const email = sessionStorage.getItem("email");
    const nickname = sessionStorage.getItem("nickname");

    if (accessToken && email && nickname) {
      dispatch(
        login({
          email,
          nickname,
        })
      );
    }
    setIsLoading(false);
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Header></Header>
      {!isLoading && <Outlet></Outlet>}
    </Container>
  );
}

export default App;
