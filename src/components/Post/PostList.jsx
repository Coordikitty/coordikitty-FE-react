import React from 'react'
import {
  Box,
  Skeleton
} from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import PostCard from './PostCard'

const PostList = ({ postList }) => {
  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'}>
      {postList.length ? (
        <Masonry columns={{ md: 4, sm: 3 }} spacing={2}>
          {postList.map((post, idx) => {
            return (
              <PostCard
                key={post.postId}
                imgSrc={post.postImgs[0]}
                postId={post.postId}
              ></PostCard>)
          })}
        </Masonry>
      ) : (
        <PostListSkeleton></PostListSkeleton>
      )
      }
    </Box>
  )
}

const PostListSkeleton = () => {
  return (
    <Masonry columns={{ md: 4, sm: 3 }} spacing={2}>
      <Skeleton variant="rectangular" height={300}/>
      <Skeleton variant="rectangular" height={150}/>
      <Skeleton variant="rectangular" height={250}/>
      <Skeleton variant="rectangular" height={200}/>
      <Skeleton variant="rectangular" height={300}/>
      <Skeleton variant="rectangular" height={400}/>
      <Skeleton variant="rectangular" height={200}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={200}/>
      <Skeleton variant="rectangular" height={150}/>
    </Masonry>
  )
}

export default PostList