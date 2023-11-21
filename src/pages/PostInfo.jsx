import { Button, Grid, Pagination } from "@mui/material";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/system";

export default function PostInfo(props) {
  return (
    <>
      <Navbar />
      <h1>Post</h1>
      {props.text}
    </>
  );
}
