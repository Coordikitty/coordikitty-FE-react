import React, { useState, useEffect } from 'react'
import { 
  Tab,
  Box,
  Tabs
} from '@mui/material'
import PostList from '../components/Post/PostList'
import getPostListApi from '../apis/post/getPostListApi'
import PostListHeader from '../components/Post/PostListHeader'
const Posts = () => {

  const [tap, setTap] = useState(0)
  const [postList, setPostList] = useState([])

  const handleTap = (e, targetTap) => {
    setTap(targetTap)
  }

  useEffect(() => {
    ;(async() => {
      const res = await getPostListApi()
      console.log('getPostListApi Res : ', res)
      setPostList(res)
    })()
  }, [])

  return (
    <Box marginTop={'2rem'}>

      {/* Post List Header */}
      <PostListHeader
        title={'POST'}
        isViewWrite={true}
      ></PostListHeader>

      {/* Tap Area */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '1rem' }} >
        <Tabs value={tap} onChange={handleTap} 
          variant='fullWidth' textColor='secondary' indicatorColor="secondary"
        >
          <Tab label="팔로워" />
          <Tab label="인기 포스트" />
          <Tab label="추천 포스트" />
        </Tabs>
      </Box>

      {/* Post List */}
      <PostList postList={postList}></PostList>
    </Box>
  )
}

export default Posts