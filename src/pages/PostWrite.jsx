import React, { useState } from 'react'
import {
  Box,
  Stack
} from '@mui/material'
import PostWriteLeft from '../components/Post/PostWriteLeft'
import PostWriteRight from '../components/Post/PostWriteRight';
import ClosetModal from '../components/Closet/ClosetModal';
const PostWrite = () => {

  const [imgFile, setImgFile] = useState(null)
  const [style, setStyle] = useState('')
  const [season, setSeason] = useState('')
  const [situation, setSituation] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box
      marginTop={'2rem'}
      borderRadius={'0.75rem'}
      padding={'1rem'}
      boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
    >
      <Stack direction={'row'}
        height={'calc(100vh - 18rem)'}
      >
        <PostWriteLeft
          imgFile={imgFile}
          setImgFile={setImgFile}
        ></PostWriteLeft>

        <PostWriteRight
          style={style}         setStyle={setStyle}
          season={season}       setSeason={setSeason}
          situation={situation} setSituation={setSituation}
          handleModalOpen={handleModalOpen}
        ></PostWriteRight>

        <ClosetModal modalOpen={modalOpen} handleModalClose={handleModalClose}></ClosetModal>

      </Stack>
    </Box>
  )
}




export default PostWrite