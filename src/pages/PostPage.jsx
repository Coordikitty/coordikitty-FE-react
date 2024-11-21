import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import PostListHeader from "../components/Post/PostListHeader";
import PostList from "../components/Post/PostList";
import getPostListApi from "../apis/post/getPostListApi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.user.nickname);

  useEffect(() => {
    if (location.pathname === "/posts" && !nickname) {
      alert("로그인 루 이용해 주세요");
      navigate("/");
    }
  }, [location, navigate, nickname]);

  return (
    <Box marginTop={"2rem"}>
      <PostListHeader title="POST" isViewWrite={true} />
      <PostList getPostListApi={getPostListApi}></PostList>
    </Box>
  );
};

export default PostPage;
