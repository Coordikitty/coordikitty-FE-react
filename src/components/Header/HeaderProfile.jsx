import React from 'react'
import { 
  Box,
  Avatar,
  Typography,
  Stack
} from '@mui/material'


const HeaderProfile = () => {
  return (
    <Stack direction={"row"}>
      {/* Profile Img */}
      <Avatar alt='user' sx={{width: "5rem", height: "5rem"}}></Avatar>
      <Box width={"100%"}>
        <Stack padding={"0 2rem"}>
          {/* User nickname */}
          <Typography variant='h3'>User</Typography>
          {/* User info */}
          <Stack direction={'row'} justifyContent={'space-between'} textAlign={'center'}>
            <Typography variant='body2'>{1}<br></br>게시물</Typography>
            <Typography variant='body2'>{1}<br></br>팔로워</Typography>
            <Typography variant='body2'>{1}<br></br>팔로잉</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default HeaderProfile