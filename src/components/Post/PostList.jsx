import React from 'react'
import {
  Box,
  Skeleton,
  Typography,
  Stack,
  Button
} from '@mui/material'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Masonry from '@mui/lab/Masonry'
import PostCard from './PostCard'
import useInfScroll from '../../hooks/useInfScroll'

const PostList = ({getDataApi}) => {

  const [postList, isLoading, isError, target] = useInfScroll(getDataApi)

  if(!isError) {
    console.log('tlqkf')
    return (
      <Stack spacing={2} alignItems={'center'} marginTop={'2rem'}>
        <Box>
          <ErrorOutlineOutlinedIcon 
            color='error'
            sx={{width: '100px', height: '100px'}}
          ></ErrorOutlineOutlinedIcon>
        </Box>
        <Typography variant='h2' color={'error'}>포스트 목록을 불러오지 못하였습니다.</Typography>
        <Button 
          variant='outlined' 
          color='error' 
          sx={{width: '30rem'}}
        >
          재시도
        </Button>
      </Stack>
    )
  }

  return (
    <Box display={'flex'} justifyContent={'center'} marginTop={'2rem'} marginBottom={'2rem'}>
      <Masonry columns={{ md: 4, sm: 3, xs: 1 }} spacing={2}>
        {postList.map((post) => {
          return (
            <PostCard
              key={post.postId}
              imgSrc={post.postImgs[0]}
              postId={post.postId}
            ></PostCard>)
        })}
        {/* Skelton */}
        <Skeleton variant="rectangular" height={150} />
        <Skeleton variant="rectangular" height={250} />
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="rectangular" height={200} />
        {!isLoading && <div ref={target} style={{height: '1px'}}></div>}
      </Masonry>
    </Box>
  )
}


export default PostList