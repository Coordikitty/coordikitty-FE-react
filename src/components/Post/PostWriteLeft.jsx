import React, { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PostWriteLeft = ({
  postImgs,
  setPostImgs,
  handleImageDelete,
  uploadedImgs,
}) => {
  console.log(uploadedImgs);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const handleImgUploadBtn = () => {
    fileInputRef.current.click();
  };
  const handleImgFile = (e) => {
    if (e.target.files.length) {
      setPostImgs([...e.target.files, ...postImgs]);
    }
  };

  useEffect(() => {
    if (postImgs.length) {
      if (uploadedImgs?.length) {
        setPreview(uploadedImgs[0]);
      } else {
        setPreview(URL.createObjectURL(postImgs[0]));
      }
    } else {
      if (uploadedImgs?.length) {
        setPreview(uploadedImgs[0]);
      } else {
        setPreview(null);
      }
    }
  }, [postImgs, uploadedImgs]);

  return (
    <Stack
      width={"50%"}
      padding={"1rem 0.5rem"}
      justifyContent={"space-between"}
      spacing={1}
    >
      {/* Preview */}
      <Box
        flexGrow={1}
        borderRadius={"0.75rem"}
        backgroundColor={"#cfcfcf"}
        overflow={"hidden"}
      >
        {preview && (
          <img
            src={preview}
            alt={preview}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
        )}
      </Box>

      {/* Selected img list */}
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ overflowX: "auto" }}
        minHeight={"12rem"}
      >
        {uploadedImgs?.map((img) => {
          return (
            <Box
              sx={{ flexShrink: 0 }}
              width={"10rem"}
              height={"10rem"}
              key={img}
              borderRadius={"0.75rem"}
              overflow={"hidden"}
              position={"relative"}
              onClick={() => {
                setPreview(img);
              }}
            >
              <img
                src={img}
                key={img}
                alt={img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></img>
              <IconButton
                onClick={() => {
                  handleImageDelete(img);
                }}
                style={{
                  color: "red",
                  position: "absolute",
                  top: "0",
                  right: "0",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          );
        })}

        {postImgs.map((imgFile) => {
          const img = URL.createObjectURL(imgFile);
          return (
            <Box
              sx={{ flexShrink: 0 }}
              width={"10rem"}
              height={"10rem"}
              key={imgFile.name}
              borderRadius={"0.75rem"}
              overflow={"hidden"}
              position={"relative"}
              onClick={() => {
                setPreview(img);
              }}
            >
              <img
                src={img}
                key={img}
                alt={img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></img>
              <IconButton
                onClick={() => {
                  handleImageDelete(imgFile.name);
                }}
                style={{
                  color: "red",
                  position: "absolute",
                  top: "0",
                  right: "0",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          );
        })}
      </Stack>

      <Button
        variant="contained"
        fullWidth
        disableElevation
        onClick={handleImgUploadBtn}
      >
        사진 추가
      </Button>
      {/* File input */}
      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleImgFile}
        accept="image/*"
        style={{ display: "none" }}
      ></input>
    </Stack>
  );
};

export default React.memo(PostWriteLeft);
