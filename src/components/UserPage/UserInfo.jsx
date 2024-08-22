import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import PostList from "../Post/PostList";
import getPostListApi from "../../apis/post/getPostListApi";
import PostListHeader from "../Post/PostListHeader";

const UserInfo = ({ userEmail }) => {
  // TODO : 사용자 이메일을 주면 닉네임, 기타 정보를 받아오는 통신 코드 추가
  const userInfo = useState({
    nickName: "Test",
    numOfPost: "1",
    numOfFollower: "1",
    numOfFollowing: "1",
  });

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
        <Stack spacing={2}>
          <Typography variant="h2">{userInfo.nickName}</Typography>
          <Stack direction={"row"} spacing={2}>
            <Typography variant="body1">
              게시물 : {userInfo.numOfPost}
            </Typography>
            <Typography variant="body1">
              팔로워 : {userInfo.numOfFollower}
            </Typography>
            <Typography variant="body1">
              팔로잉 : {userInfo.numOfFollowing}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Posts Written By User */}

      {/* Post List Header */}
      <PostListHeader title={"MY POST"} isViewWrite={true}></PostListHeader>

      {/* Post List */}
      <PostList getPostListApi={getPostListApi}></PostList>
    </Box>
  );
};

export default UserInfo;
