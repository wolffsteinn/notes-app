import { Box, Grid } from "@mui/material";
import React from "react";
import Note from "./Note";

const NotesList = () => {
  return (
    <Grid container spacing={3}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </Grid>
  );
};

export default NotesList;
