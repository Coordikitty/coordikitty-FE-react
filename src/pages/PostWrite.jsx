import React, { useState } from 'react'
import {
  Box,
  Stack
} from '@mui/material'
import PostWriteLeft from '../components/Post/PostWriteLeft'
import PostWriteRight from '../components/Post/PostWriteRight';
import ClosetModal from '../components/Closet/ClosetModal';
import postUploadApi from '../apis/post/postUploadApi';
import { useNavigate } from 'react-router-dom';


const PostWrite = () => {

  const navigate = useNavigate()
  const [postImgs, setPostImgs] = useState([])
  const [content, setContent] = useState('')
  const [style, setStyle] = useState('')
  // const [season, setSeason] = useState('')
  // const [situation, setSituation] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [clothIds, setClothIds] = useState([])
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSubmit = async() => {
    const data = {
      content,
      // postImgs,
      clothIds,
      style
    }
    try {
      const res = await postUploadApi(data)
      console.log('postUploadApi res : ', res)
      alert('포스트 업로드 성공')
      navigate('/posts')
    } catch (error) {
      console.error(error)
      alert('포스트 업로드 실패')
    }
  }

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
          postImgs={postImgs}
          setPostImgs={setPostImgs}
        ></PostWriteLeft>

        <PostWriteRight
          content={content}     setContent={setContent}
          style={style}         setStyle={setStyle}
          // season={season}       setSeason={setSeason}
          // situation={situation} setSituation={setSituation}
          handleModalOpen={handleModalOpen}
          isValid={content && style && postImgs.length} handleSubmit={handleSubmit}
        ></PostWriteRight>

        <ClosetModal modalOpen={modalOpen} handleModalClose={handleModalClose}></ClosetModal>

      </Stack>
    </Box>
  )
}




export default PostWrite