import React, { useState } from 'react'
import { 
  Stack,
  TextField,
  Button,
  Box
} from '@mui/material'
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import HeaderProfile from './HeaderProfile';
import LogoWide from '../../assets/LogoWide.png'
import HeaderAuth from './HeaderAuth';
import { useSelector } from 'react-redux';

const HOME = 'home'
const POST = 'post'
const MY_PAGE = 'my_page'

const Header = () => {

  const [tap, setTap] = useState(HOME)
  const navigate = useNavigate()
  const nickname = useSelector(state => state.user.nickname)
  
  return (
    <Stack component={"header"} spacing={0}
      sx={{
        position: 'sticky',
        marginTop: '2rem',
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}>

      {/* Top */}
      <Stack direction={"row"} alignItems={"center"} spacing={0}>
        {/* Logo */}
        <NavTopItemWrap>
          <Logo></Logo>
        </NavTopItemWrap>
        {/* Search */}
        <NavTopItemWrap>
          <TextField 
            id="search" 
            label="Search" 
            variant="outlined"
            fullWidth
            size='small'
            sx={{
              "& fieldset" :{
                borderRadius: "0.75rem"
              }
            }}
          />
        </NavTopItemWrap>
        {/* Profile */}
        <NavTopItemWrap>
          { nickname ? <HeaderProfile />:<HeaderAuth />}  
        </NavTopItemWrap>
      </Stack>

      {/* Bottom */}
      <Stack component={"nav"} direction={"row"}>
        <NavButton variant='contained' fullWidth 
          is-active={tap === HOME ? 'true' : undefined} 
          onClick={() => {setTap(HOME); navigate('/')}}
        >
          Home
        </NavButton>
        <NavButton variant='contained' fullWidth 
          is-active={tap === POST ? 'true' : undefined}
          onClick={() => {setTap(POST); navigate('/posts')}}
        >
          Post
        </NavButton>
        <NavButton variant='contained' fullWidth 
          is-active={tap === MY_PAGE ? 'true' : undefined}
          onClick={() => {setTap(MY_PAGE); navigate('/my-page')}}
        >
          My Page
        </NavButton>
      </Stack>
    </Stack>
  )
}

const NavTopItemWrap = styled(Box)(() => {
  return {
    padding: "0.5rem 1rem",
    width: "100%"
  }
})

const Logo = styled('div')(() => {
  return {
    height: "5rem",
    width: "11rem",
    backgroundImage: `url(${LogoWide})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  }
})

const NavButton = styled(Button)((props) => {
  return {
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "1.6rem",
    ...(props["is-active"] && {
      fontWeight: 700,
      backgroundColor: "#ffffff",
      boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
      "&:hover" : {
        backgroundColor: "#ffffff",
        boxShadow: "none"
      }
    })
  }
})

export default Header