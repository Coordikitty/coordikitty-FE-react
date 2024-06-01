import React from 'react'
import { 
  Box
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PostCard = ({imgSrc, postId}) => {

  const navigate = useNavigate()

  return (
    <Box onClick={() => {navigate(`/post/${postId}`)}}>
      <img 
        src={imgSrc} 
        alt={imgSrc}
        loading='lazy'
        style={{
          borderRadius: '0.75rem',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default PostCard