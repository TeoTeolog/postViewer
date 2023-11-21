import { useDispatch } from "react-redux";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async (event) => {
    event.preventDefault();

    dispatch(logout());
    navigate("/login");
  };

  const commonProps = {
    variant: "standard",
    fullWidth: true,
    margin: "dense",
    color: "secondary",
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" onClick={onClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Login;
