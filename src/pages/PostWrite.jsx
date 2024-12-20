import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import PostWriteLeft from "../components/Post/PostWriteLeft";
import PostWriteRight from "../components/Post/PostWriteRight";
import ClosetModal from "../components/Closet/ClosetModal";
import postUploadApi from "../apis/post/postUploadApi";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const PostWrite = () => {
  const navigate = useNavigate();
  const [postImgs, setPostImgs] = useState([]);
  const [content, setContent] = useState("");
  const [style, setStyle] = useState("");
  // const [season, setSeason] = useState('')
  // const [situation, setSituation] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [clothIds, setClothIds] = useState([]);
  const [clothImgs, setClothImgs] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleImageDelete = (target) => {
    setPostImgs((prev) => prev.filter((el) => el.name !== target));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      const data = {
        content,
        clothIds,
        style,
      };
      formData.append(
        "postUploadRequestDto",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
      postImgs.map((postImg) => {
        console.log(postImg);
        formData.append("postImgs", postImg);
        return null;
      });
      const res = await postUploadApi(formData);
      console.log("postUploadApi res : ", res);
      alert("포스트 업로드 성공");
      navigate("/posts");
    } catch (error) {
      console.error(error);
      alert("포스트 업로드 실패");
    }
  };

  return (
    <Box
      marginTop={"2rem"}
      borderRadius={"0.75rem"}
      padding={"1rem"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      marginBottom={!matches && "2rem"}
    >
      <Stack
        direction={matches ? "row" : "column"}
        height={matches && "calc(100vh - 18rem)"}
      >
        <PostWriteLeft
          postImgs={postImgs}
          setPostImgs={setPostImgs}
          handleImageDelete={handleImageDelete}
        ></PostWriteLeft>

        <PostWriteRight
          content={content}
          setContent={setContent}
          style={style}
          setStyle={setStyle}
          // season={season}       setSeason={setSeason}
          // situation={situation} setSituation={setSituation}
          clothImgs={clothImgs}
          handleModalOpen={handleModalOpen}
          isValid={content && style && postImgs.length}
          handleSubmit={handleSubmit}
        ></PostWriteRight>
        <ClosetModal
          selectTool={{ clothIds, setClothIds, clothImgs, setClothImgs }}
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
        ></ClosetModal>
      </Stack>
    </Box>
  );
};

export default PostWrite;
