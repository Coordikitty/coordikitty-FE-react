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


const PostList = ({postList}) => {

 
 
  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'}>
      <Masonry columns={{ md: 4, sm: 3 }} spacing={2}>
        <PostCard imgSrc={img1} postId={1}></PostCard>
        <PostCard imgSrc={img2} postId={2}></PostCard>
        <PostCard imgSrc={img3} postId={3}></PostCard>
        <PostCard imgSrc={img4} postId={4}></PostCard>
        <PostCard imgSrc={img5} postId={5}></PostCard>
        <PostCard imgSrc={img6} postId={6}></PostCard>
        <PostCard imgSrc={img7} postId={7}></PostCard>
        {postList.map((post) => {
          return (
            <PostCard 
              key={post.postId} 
              imgSrc={img7}
              postId={post.postId}
            ></PostCard>)
        })}
      </Masonry>
    </Box>
  )
}

export default PostList