import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Box,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
  Divider,
  Avatar
} from '@mui/material'
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import tempImg from '../assets/temp.jpg'

const Post = () => {
  
  const { postId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(!postId) navigate('/posts')
  }, [postId, navigate])
  
  return (
    <Container maxWidth='sm' >
      <Stack spacing={2}
        padding={'2rem'} margin={'2rem 0'} borderRadius={'0.75rem'}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
      >
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar alt='test'></Avatar>
            <Typography variant='h3'>{'User name'}</Typography>
          </Stack>
          <Button variant={'outlined'} size='small' color='black'>Follow</Button>
        </Stack>

        {/* 이미지 */}
        <img src={tempImg} alt={'test'} style={{ width: '100%', height: 'calc(100vh - 28rem)', objectFit: 'contain' }}></img>

        {/* 좋아요 / 북마크 */}
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Button color='black' size='large' startIcon={<FavoriteIcon></FavoriteIcon>}>
            <Typography variant='h3' paddingTop={'0.2rem'}>좋아요</Typography>
          </Button>
          <IconButton color='black' size='large'>
            <BookmarkIcon fontSize='large'></BookmarkIcon>
          </IconButton>
        </Stack>

        <Stack spacing={1}>
          <Divider></Divider>
          {/* 본문 */}
          <Typography variant='body1'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illo, tempore fugiat possimus magnam, magni, ab dolorum reprehenderit a quia ad molestias eaque? Debitis facilis consectetur, optio totam aut ut!
          </Typography>

          {/* 글 정보 */}
          <Typography variant='body2' color={'primary'}>
            <InfoSpan>상황 : {'데일리'}</InfoSpan>
            <InfoSpan>계절 : {'봄'}</InfoSpan>
            <InfoSpan>스타일 : {'케주얼'}</InfoSpan>
          </Typography>
          <Divider></Divider>
        </Stack>


      </Stack>

    </Container>
  )
}

const InfoSpan = styled('span')((props) => {
  return {
    '&::after' : {
      content : "' / '"
    }
  }
})

export default Post