import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
function App() {
  return (
      <Container maxWidth="md" sx={{backgroundColor: "gray", height: "1500px"}}>
        <Header></Header>
        <Outlet></Outlet>
      </Container>
  );
}

export default App;
