import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import PostList from "../Post/PostList";
import getPostListApi from "../../apis/post/getPostListApi";
import PostListHeader from "../Post/PostListHeader";
import { useSelector } from "react-redux";
import getMyPostApi from "../../apis/post/getMyPostApi";

const UserInfo = () => {
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <Box width={"100%"}>
      {/* User Basic info */}
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"5rem auto"}
      >
        <Avatar sx={{ width: "10rem", height: "10rem" }}></Avatar>
        <Typography variant="h2">{nickname}</Typography>
      </Stack>

      {/* Posts Written By User */}

      {/* Post List Header */}
      <PostListHeader title={"MY POST"} isViewWrite={true}></PostListHeader>

      {/* Post List */}
      <PostList getPostListApi={getMyPostApi}></PostList>
    </Box>
  );
};

export default UserInfo;
