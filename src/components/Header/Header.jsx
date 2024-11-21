import React, { useState } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import LogoWide from "../../assets/LogoWide.png";
import HeaderAuth from "./HeaderAuth";
import { useSelector } from "react-redux";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <Stack
      component={"header"}
      spacing={0}
      sx={{
        position: "sticky",
        marginTop: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {/* Top */}
      <Stack direction={"row"} alignItems={"center"} spacing={0}>
        {/* Logo */}
        <NavTopItemWrap>
          <Logo></Logo>
        </NavTopItemWrap>
        {/* Profile */}
        <NavTopItemWrap>
          {nickname ? <HeaderProfile /> : <HeaderAuth />}
        </NavTopItemWrap>
      </Stack>

      {/* Bottom */}
      <Stack component={"nav"} direction={"row"}>
        <NavButton
          variant="contained"
          is-active={pathname === "/" ? "true" : undefined}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </NavButton>
        <NavButton
          variant="contained"
          is-active={pathname === "/posts" ? "true" : undefined}
          onClick={() => {
            navigate("/posts");
          }}
        >
          Post
        </NavButton>
      </Stack>
    </Stack>
  );
};

const NavTopItemWrap = styled(Box)(() => {
  return {
    padding: "0.5rem 1rem",
    width: "100%",
  };
});

const Logo = styled("div")(() => {
  return {
    height: "5rem",
    width: "11rem",
    backgroundImage: `url(${LogoWide})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
});

const NavButton = styled(Button)((props) => {
  return {
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "1.6rem",
    width: "50%",
    transition: "ease-in-out 0.5s",
    ...(props["is-active"] && {
      width: "70%",
      fontWeight: 700,
      backgroundColor: "#ffffff",
      boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
      "&:hover": {
        backgroundColor: "#ffffff",
        boxShadow: "none",
      },
    }),
  };
});

export default Header;
