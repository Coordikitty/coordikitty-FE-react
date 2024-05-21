import React from 'react'
import { 
  Box
} from '@mui/material'

const PostCard = ({imgSrc}) => {
  return (
    <Box>
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