import React, { useEffect, useState } from "react";
import { Box, Skeleton, Typography, Stack, Button, Fade } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Masonry from "@mui/lab/Masonry";
import PostCard from "./PostCard";

const PostList = ({ getPostListApi }) => {
  // const [postList, isLoading, isError, target] = useInfScroll(getPostListApi);

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await getPostListApi();
        setPostList(res);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [getPostListApi]);

  if (isError) {
    return (
      <Stack spacing={2} alignItems={"center"} marginTop={"2rem"}>
        <Box>
          <ErrorOutlineOutlinedIcon
            color="error"
            sx={{ width: "100px", height: "100px" }}
          ></ErrorOutlineOutlinedIcon>
        </Box>
        <Typography variant="h2" color={"error"}>
          포스트 목록을 불러오지 못하였습니다.
        </Typography>
        <Button variant="outlined" color="error" sx={{ width: "30rem" }}>
          재시도
        </Button>
      </Stack>
    );
  }

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"2rem"}
        marginBottom={"2rem"}
      >
        <Masonry
          columns={{ md: 3, sm: 2, xs: 1 }}
          spacing={2}
          key={postList.length}
        >
          {postList.map((post, idx) => {
            return (
              <PostCard
                key={idx}
                isLoading={isLoading}
                imgSrc={post.postImgs[0]}
                postId={post.postId}
              ></PostCard>
            );
          })}
          {/* Skelton */}
          {isLoading && (
            <>
              <Skeleton variant="rectangular" height={150} />
              <Skeleton variant="rectangular" height={250} />
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="rectangular" height={200} />
            </>
          )}
        </Masonry>
      </Box>
      {/* {!isLoading && (
        <div
          ref={target}
          style={{ height: "1000px", backgroundColor: "transparent" }}
        ></div>
      )} */}
    </>
  );
};

export default PostList;
