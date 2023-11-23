//ui component for post with detail's

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

export const PostDetailCard = (props) => {
  const { title, author, text, id } = props.post;
  const navigate = useNavigate();

  const styles = {
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
    button: {
      color: "#3897f0",
      fontWeight: "bold",
    },
  };

  return (
    <Card style={styles.card}>
      <CardHeader
        avatar={<div style={styles.avatar}></div>}
        title={<Typography style={styles.title}>{title}</Typography>}
        subheader={<Typography style={styles.author}>{author}</Typography>}
      />
      <CardContent style={styles.content}>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions style={styles.actions}>
        <Button
          style={styles.button}
          onClick={() => {
            navigate(`/#post${id}`);
          }}
        >
          Go back
        </Button>
      </CardActions>
    </Card>
  );
};
