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

const PostList = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'}>
      <Masonry columns={{ md: 4, sm: 3 }} spacing={2}>
        <PostCard imgSrc={img1}></PostCard>
        <PostCard imgSrc={img2}></PostCard>
        <PostCard imgSrc={img3}></PostCard>
        <PostCard imgSrc={img4}></PostCard>
        <PostCard imgSrc={img5}></PostCard>
        <PostCard imgSrc={img2}></PostCard>
        <PostCard imgSrc={img7}></PostCard>
        <PostCard imgSrc={img5}></PostCard>
        <PostCard imgSrc={img7}></PostCard>
        <PostCard imgSrc={img6}></PostCard>
        <PostCard imgSrc={img1}></PostCard>
        <PostCard imgSrc={img2}></PostCard>
        <PostCard imgSrc={img5}></PostCard>
        <PostCard imgSrc={img1}></PostCard>
        <PostCard imgSrc={img3}></PostCard>
        <PostCard imgSrc={img2}></PostCard>
        <PostCard imgSrc={img7}></PostCard>
        <PostCard imgSrc={img5}></PostCard>
        <PostCard imgSrc={img1}></PostCard>
      </Masonry>
    </Box>
  )
}

export default PostList