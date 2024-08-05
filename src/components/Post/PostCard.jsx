import React from 'react'
import {
  Box,
  Skeleton,
  Fade,
  Zoom
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ imgSrc, postId, isLoading }) => {

  const navigate = useNavigate()

  return (
    <Fade in={!isLoading} timeout={250} appear={true}>
      <Box onClick={() => { navigate(`/post/${postId}`) }}>
        <div>{postId}</div>
        {imgSrc ? <img
          src={imgSrc}
          alt={imgSrc}
          loading='lazy'
          style={{
            width: '100%',
            borderRadius: '0.75rem',
          }}
        /> : <Skeleton variant='rectangular' height={300} sx={{ borderRadius: '0.75rem' }}></Skeleton>}
      </Box>
    </Fade>
  )
}

export default PostCard