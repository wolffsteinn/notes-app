import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// maybe i can pass the style as a theme context
// to addNote.jsx so that no need to rewrite this.
const Item = styled(Paper)(() => ({
  minHeight: "170px",
  padding: "5px",
  backgroundColor: "#fbcfe8",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  whiteSpace: "pre-wrap",
}));

const Footer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Note = ({ note, handleDeleteNote }) => {
  return (
    <Grid item xs={4} id={note.id}>
      <Item>
        <Typography variant="h4">{note.title}</Typography>
        <span>{note.text}</span>
        <Footer>
          <span>{note.date}</span>
          <MdDeleteForever
            onClick={() => {
              handleDeleteNote(note.id);
            }}
            style={{ cursor: "pointer" }}
          />
        </Footer>
      </Item>
    </Grid>
  );
};

export default Note;
