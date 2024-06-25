import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Button
} from '@mui/material'
import PostList from '../Post/PostList'
import {loggedGetPostListApi, unLoggedGetPostListApi} from '../../apis/post/getPostListApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {

  const navigate = useNavigate()
  const [postList, setPostList] = useState([])
  const accessToken = useSelector(state => state.user.accessToken)


  useEffect(() => {
    const fetch = async() => {
      if(accessToken) {
        const res = await loggedGetPostListApi()
        console.log('loggedGetPostListApi res : ', res)
        setPostList(res)
      } else {
        const res = await unLoggedGetPostListApi()
        console.log('unLoggedGetPostListApi res : ', res)
        setPostList(res)
      }
    }
    fetch()
  }, [accessToken])

  return (
    <Box width={'100%'}>
      {/* User Basic info */}
      <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} margin={'5rem auto'}>
        <Avatar sx={{ width: '10rem', height: '10rem' }}></Avatar>
        <Stack spacing={2}>
          <Typography variant='h2'>User name</Typography>
          <Stack direction={'row'} spacing={2}>
            <Typography variant='body1'>게시물 : {1}</Typography>
            <Typography variant='body1'>팔로워 : {1}</Typography>
            <Typography variant='body1'>팔로잉 : {1}</Typography>
          </Stack>
        </Stack>
      </Stack>
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
      <PostList postList={postList}></PostList>
    </Box>
  )
}

export default UserInfo