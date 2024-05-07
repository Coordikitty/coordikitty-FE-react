import React from 'react'
import { Stack, Button } from '@mui/material'
const HeaderAuth = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Button variant="contained" fullWidth disableElevation>로그인</Button>
      <Button variant="contained" fullWidth disableElevation>회워가입</Button>
    </Stack>
  )
}

export default HeaderAuth