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
  Skeleton,
} from '@mui/material'
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import getPostApi from '../apis/post/getPostApi';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import seasonInfo from '../utils/seasonInfo';
import styleInfo from '../utils/styleInfo';
import deletePostApi from '../apis/post/deletePostApi';
import {postLikeApi, postLikeCancelApi} from '../apis/post/postLikeApi';

const Post = () => {

  const email = useSelector(state => state.user.email)
  const { postId } = useParams()
  const [postData, setPostData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!postId) {
      navigate('/posts')
    } else {
      ;(async () => {
        const res = await getPostApi(postId)
        console.log('getPostApi res : ', res)
        setPostData(res)
      })()
    }
  }, [postId, navigate, email])

  const handleLike = async() => {
    if(postData.isLiked) {
      setPostData({...postData, isLiked: false, postLike : postData.postLike - 1})
      const res = await postLikeCancelApi(postId)
      console.log("postLikeApi res : ", res)
    } else {
      setPostData({...postData, isLiked: true, postLike : postData.postLike + 1})
      const res = await postLikeApi(postId)
      console.log("postLikeApi res : ", res)
    }
  }

  const handleBookmark = async() => {
    setPostData({...postData, isBookmarked: !postData.isBookmarked})
  }

  const handleDelete = async() => {
    try {
      const res = await deletePostApi(postId)
      console.log('deletePostApi res :', res)
      alert('포스트 삭제 성공')
      navigate('/posts')
    } catch (error) {
      alert('포스트 삭제 실패')
      console.error(error);
    }
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
            {email === postData.uploaderEmail ? 
              <Box>
                <IconButton color='black' size='large' onClick={handleDelete}>
                  <DeleteIcon fontSize='large'></DeleteIcon>
                </IconButton>
                <IconButton color='black' size='large' onClick={() => {}}>
                  <EditIcon fontSize='large'></EditIcon>
                </IconButton>
              </Box> 
              :
              <Button variant={'outlined'} size='small' color='black'>Follow</Button>
            }
          </Stack>

          {/* 이미지 */}
          {postData.postImgs.map((img) => {
            return <img src={img} key={img} alt={img} style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'contain' }}></img>
          })}
          

          {/* 좋아요 / 북마크 */}
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Button color='black' size='large' onClick={handleLike} disabled={!email}
              startIcon={postData.isLiked ? <FavoriteIcon color='secondary'></FavoriteIcon> : <FavoriteBorderIcon></FavoriteBorderIcon>}>
              <Typography variant='h3' paddingTop={'0.2rem'}>{postData.postLike}</Typography>
            </Button>
            <Stack direction={'row'}>
              <IconButton color='black' size='large' onClick={handleBookmark} disabled={!email}>
                {postData.isBookmarked ? 
                  <BookmarkIcon color='secondary' fontSize='large'></BookmarkIcon> : <BookmarkBorderIcon fontSize='large'></BookmarkBorderIcon>
                }
              </IconButton>
            </Stack>
          </Stack>

          {/* 본문 */}
          <Stack spacing={1}>
            <Divider></Divider>
            {/* 본문 */}
            <Typography variant='body1'>
              {postData.content}
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