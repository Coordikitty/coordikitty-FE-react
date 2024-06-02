import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
  Divider,
  Avatar,
  Skeleton
} from '@mui/material'
import { styled } from '@mui/system';
import getPostApi from '../apis/post/getPostApi';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import tempImg from '../assets/temp.jpg'
import seasonInfo from '../utils/seasonInfo';
import styleInfo from '../utils/styleInfo';

const Post = () => {

  const { postId } = useParams()
  const [postData, setPostData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!postId) {
      navigate('/posts')
    } else {
      ; (async () => {
        const res = await getPostApi(postId)
        console.log('getPostApi res : ', res)
        setPostData(res)
      })()
    }
  }, [postId, navigate])

  const handleLike = async() => {
    setPostData({...postData, isLiked: !postData.isLiked, postLike : postData.isLiked? postData.postLike - 1 : postData.postLike + 1})
  }

  const handleBookmark = async() => {
    setPostData({...postData, isBookmarked: !postData.isBookmarked})
  }

  return (
    <Container maxWidth='sm' >
      {postData ? 
        <Stack spacing={1}
          padding={'2rem'} margin={'2rem 0'} borderRadius={'0.75rem'}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        >
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Avatar alt='test'></Avatar>
              <Typography variant='h3'>{postData.uploaderNickname}</Typography>
            </Stack>
            <Button variant={'outlined'} size='small' color='black'>Follow</Button>
          </Stack>

          {/* 이미지 */}
          <img src={tempImg} alt={'test'} style={{ width: '100%', height: 'calc(100vh - 28rem)', objectFit: 'contain' }}></img>

          {/* 좋아요 / 북마크 */}
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Button color='black' size='large' onClick={handleLike}
              startIcon={postData.isLiked ? <FavoriteIcon color='secondary'></FavoriteIcon> : <FavoriteBorderIcon></FavoriteBorderIcon>}>
              <Typography variant='h3' paddingTop={'0.2rem'}>{postData.postLike}</Typography>
            </Button>
            <IconButton color='black' size='large' onClick={handleBookmark}>
              {postData.isBookmarked ? 
                <BookmarkIcon color='secondary' fontSize='large'></BookmarkIcon> : <BookmarkBorderIcon fontSize='large'></BookmarkBorderIcon>
              }
            </IconButton>
          </Stack>

          {/* 본문 */}
          <Stack spacing={1}>
            <Divider></Divider>
            {/* 본문 */}
            <Typography variant='body1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illo, tempore fugiat possimus magnam, magni, ab dolorum reprehenderit a quia ad molestias eaque? Debitis facilis consectetur, optio totam aut ut!
            </Typography>

            {/* 글 정보 */}
            <Typography variant='body2' color={'primary'}>
              <InfoSpan>상황 : {postData.situation}</InfoSpan>
              <InfoSpan>계절 : {(seasonInfo.find(el => el.val === postData.season)?.kr)}</InfoSpan>
              <InfoSpan>스타일 : {(styleInfo.find(el => el.style === postData.style)?.kr)}</InfoSpan>
              <InfoSpan>업로드 날자 : {Date(postData.uploadDate).slice(0, -17)}</InfoSpan>
            </Typography>
            <Divider></Divider>
          </Stack>
        </Stack>
        : // Skelton
        <Stack spacing={2}
          padding={'2rem'} margin={'2rem 0'} borderRadius={'0.75rem'}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        >
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
              <Skeleton>
                <Typography variant="h3">Loading...</Typography>
              </Skeleton>
            </Stack>
          </Stack>
          <Skeleton variant='rectangular' width={'100%'} height={'calc(100vh - 28rem)'}></Skeleton>
          <Skeleton variant='rectangular' width={'100%'} height={30}></Skeleton>
        </Stack>
      }




    </Container>
  )
}

const InfoSpan = styled('span')((props) => {
  return {
    '&::after': {
      content: "' / '"
    }
  }
})

export default Post