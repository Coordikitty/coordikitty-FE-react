import React, { useEffect, useState } from 'react'
import { 
  Tab,
  Box,
  Stack,
  Typography,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {loggedGetPostListApi, unLoggedGetPostListApi} from '../../apis/post/getPostListApi';
import Tabs from '@mui/material/Tabs';
import PostList from './PostList';
const PostListHeader = () => {
  const navigate = useNavigate()
  const accessToken = useSelector(state => state.user.accessToken)
  const [tap, setTap] = useState(0)
  const [postList, setPostList] = useState([])
  const handleTap = (e, targetTap) => {
    console.log(targetTap)
    setTap(targetTap)
  }

  useEffect(() => {
    const fetch = async() => {
      if(accessToken) {
        const res = await loggedGetPostListApi()
        console.log('loggedGetPostListApi res : ', res)
        // setPostList(res)
      } else {
        const res = await unLoggedGetPostListApi()
        console.log('unLoggedGetPostListApi res : ', res)
        // setPostList(res)
      }
    }
    fetch()
  }, [accessToken])

  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h1'>Post</Typography>
        <Button 
          variant='contained' 
          disableElevation 
          sx={{width: "20%"}}
          onClick={() => {navigate('/post-write')}}
        >
          글 작성
        </Button>
      </Stack>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '1rem' }} >
        <Tabs value={tap} onChange={handleTap} 
          variant='fullWidth' textColor='secondary' indicatorColor="secondary"
        >
          <Tab label="팔로워" />
          <Tab label="인기 포스트" />
          <Tab label="추천 포스트" />
        </Tabs>
      </Box>
      <PostList postList={postList}></PostList>
    </Box>
  )
}

export default PostListHeader