import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Stack,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/UserReducer";

const HeaderProfile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const nickname = useSelector((state) => state.user.nickname);
  const dispatch = useDispatch();

  // Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("accessToken");
    navigate("/");
    alert("로그아웃 되었습니다");
  };

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
      {/* Profile Img */}
      <IconButton onClick={handleClick}>
        <Avatar alt="user" sx={{ width: "5rem", height: "5rem" }}></Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "20rem",
              borderRadius: "0.75rem",
              padding: "0.5rem 1rem",
            },
          },
        }}
      >
        {/* User info */}
        <Stack spacing={1} textAlign={"end"}>
          <Typography variant="h3">{nickname}</Typography>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/my-page");
            }}
            disableGutters
          >
            My Page
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogout();
            }}
            disableGutters
            sx={{
              color: theme.palette.error.main,
            }}
          >
            Logout
          </MenuItem>
        </Stack>
      </Menu>
    </Stack>
  );
};

export default HeaderProfile;
