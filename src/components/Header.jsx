import React from 'react'
import { 
  Stack,
  TextField,
  Button,
  Box
} from '@mui/material'
import { styled } from '@mui/system';
import HeaderProfile from './HeaderProfile';
import LogoWide from '../assets/LogoWide.png'

const Header = () => {
  return (
    <Stack component={"header"} spacing={0}
      sx={{
        marginTop: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
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
          <HeaderProfile></HeaderProfile>
        </NavTopItemWrap>
      </Stack>

      {/* Bottom */}
      <Stack component={"nav"} direction={"row"}>
        <NavButton variant='contained' fullWidth is-active={'true'} >
          Home
        </NavButton>
        <NavButton variant='contained' fullWidth >
          Community
        </NavButton>
        <NavButton variant='contained' fullWidth >
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