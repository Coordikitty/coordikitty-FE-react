import React from 'react'
import { 
  Box,
  Avatar,
  Typography,
  Stack,
  Button
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/UserReducer'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const HeaderProfile = () => {

  const nickname = useSelector(state => state.user.nickname)
  const dispatch = useDispatch()
  const [, , removeCookie] = useCookies()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    removeCookie('refreshToken')
    alert('로그아웃 되었습니다')
    navigate('/')
  }

  return (
    <Stack direction={"row"} alignItems={'center'}>
      {/* Profile Img */}
      <Avatar alt='user' sx={{width: "5rem", height: "5rem"}}></Avatar>
      <Box width={"100%"}>
        <Stack spacing={1}>
          {/* User nickname */}
          <Stack direction={'row'} justifyContent={'space-between'} paddingLeft={"2rem"} >
            <Typography variant='h3'>{nickname}</Typography>
            <Button variant='outlined' color='black' size='small'
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </Stack>
          {/* User info */}
          <Stack direction={'row'} justifyContent={'space-between'} textAlign={'center'} padding={'0 2rem'}>
            <Typography variant='body2'>게시물 : {1}</Typography>
            <Typography variant='body2'>팔로워 : {1}</Typography>
            <Typography variant='body2'>팔로잉 : {1}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default HeaderProfile