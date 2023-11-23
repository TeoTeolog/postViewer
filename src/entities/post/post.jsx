//ui component for post breaf

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Post = (props) => {
  const { title, author, text, id } = props.post;
  const navigate = useNavigate();

  const styles = {
    card: {
      maxWidth: 600,
      margin: "auto",
      borderRadius: 10,
      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
      marginBottom: "15px",
    },
    header: {
      padding: 16,
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      marginRight: 16,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
    },
    author: {
      color: "#999",
      fontSize: 14,
    },
    content: {
      padding: 16,
      fontSize: 16,
      lineHeight: 1.5,
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    actions: {
      padding: 16,
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      color: "#3897f0",
      fontWeight: "bold",
    },
  };

  return (
    <Card style={styles.card} id={"post" + id}>
      <CardHeader
        avatar={<div style={styles.avatar}></div>}
        title={<Typography style={styles.title}>{title}</Typography>}
        subheader={<Typography style={styles.author}>{author}</Typography>}
      />
      <CardContent style={styles.content}>{text}</CardContent>
      <CardActions style={styles.actions}>
        <Button
          style={styles.button}
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
