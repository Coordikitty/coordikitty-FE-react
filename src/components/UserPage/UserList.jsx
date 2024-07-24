import React from 'react'
import { 
  Stack
} from '@mui/material'

import UserListComp from './UserListComp'

const UserList = () => {
  return (
    <Stack spacing={2} marginTop={'2rem'}>
      <UserListComp></UserListComp>
      <UserListComp></UserListComp>
      <UserListComp></UserListComp>
    </Stack>
  )
}

export default UserList