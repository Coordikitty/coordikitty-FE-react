import React from 'react'
import { 
  Box
} from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import PostCard from './PostCard'

const PostList = ({postList}) => {
 
  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'}>
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
    </Box>
  )
}

export default PostList