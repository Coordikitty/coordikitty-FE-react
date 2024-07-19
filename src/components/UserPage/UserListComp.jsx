import React from 'react'
import { 
  Avatar,
  Button,
  Stack,
  Typography
} from '@mui/material'


const UserListComp = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      {/* Left User porfile img & nickname */}
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Avatar alt='User' sx={{width: '5rem', height: '5rem'}}></Avatar>
        <Typography variant='h3'>User</Typography>
      </Stack>
      
      {/* Following Button */}
      <Button variant='outlined' color='black'>Follow</Button>
    </Stack>
  )
}

export default UserListComp