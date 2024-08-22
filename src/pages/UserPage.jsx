import React from "react";
import UserInfo from "../components/UserPage/UserInfo";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userEmail } = useParams();
  console.log("userpage", userEmail);

  return <UserInfo userEmail={userEmail}></UserInfo>;
};

export default UserPage;
