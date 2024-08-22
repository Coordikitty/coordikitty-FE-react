import React from "react";

import RequiredSignin from "../components/RequiredSignin";
import Recommend from "../components/Recommend";
import { useSelector } from "react-redux";

const Home = () => {
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <React.Fragment>
      {/* 로그인 O : 옷 추천  컴포넌트*/}
      {nickname ? <Recommend></Recommend> : <RequiredSignin></RequiredSignin>}
    </React.Fragment>
  );
};

export default Home;
