import { Outlet } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
