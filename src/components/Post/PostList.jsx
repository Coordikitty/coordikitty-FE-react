import React from 'react'
import { 
  Box
} from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import PostCard from './PostCard'


import img1 from '../../assets/post_temp/1.jpg'
import img2 from '../../assets/post_temp/2.jpg'
import img3 from '../../assets/post_temp/3.jpg'
import img4 from '../../assets/post_temp/4.jpg'
import img5 from '../../assets/post_temp/5.jpg'
import img6 from '../../assets/post_temp/6.jpg'
import img7 from '../../assets/post_temp/7.jpg'

const imgList = [img1, img2, img3, img4, img5, img6, img7]

const PostList = ({postList}) => {
 
  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'}>
      <Masonry columns={{ md: 4, sm: 3 }} spacing={2}>
        {postList.map((post, idx) => {
          return (
            <PostCard 
              key={post.postId} 
              imgSrc={imgList[idx % 7]}
              postId={post.postId}
            ></PostCard>)
        })}
      </Masonry>
    </Box>
  )
}

export default PostList