import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Stack,
} from '@mui/material'
import PostList from '../Post/PostList'
import getPostListApi from '../../apis/post/getPostListApi';
import PostListHeader from '../Post/PostListHeader';

const UserInfo = () => {

  const [postList, setPostList] = useState([])


  useEffect(() => {
    ;(async() => {
      const res = await getPostListApi()
      console.log('getPostListApi Res : ', res)
      setPostList(res)
    })()
  }, [])

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

      {/* Posts Written By User */}

      {/* Post List Header */}
      <PostListHeader
        title={'MY POST'}
        isViewWrite={true}
      ></PostListHeader>

      {/* Post List */}
      {/* <PostList postList={postList}></PostList> */}
    </Box>
  )
}

export default UserInfo