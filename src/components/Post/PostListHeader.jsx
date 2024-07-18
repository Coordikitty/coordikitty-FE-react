import React from 'react'
import { 
  Stack,
  Typography,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PostListHeader = ({title, isViewWrite}) => {

  const navigate = useNavigate()

  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Typography variant='h1'>{title}</Typography>
      {isViewWrite && <Button
        variant='contained' disableElevation sx={{ width: "20%" }}
        onClick={() => { navigate('/post-write') }}
      > 글 작성
      </Button>}
    </Stack>
  )
}

export default PostListHeader