import { Box, Container } from "@mui/material";
import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import SearchBar from "./SearchBar";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleSearchNote,
}) => {
  return (
    <Container maxWidth="lg">
      <SearchBar handleSearchNote={handleSearchNote} />
      {/* Box on the outside container containing all the notes 
      so that we can do CSS grids */}
      <Box
        sx={{
          display: "grid",
          // auto-fit: number of notes per row is based on the size of the window
          // minmax(250px, 1fr): The width of the note cannot be smaller than 250px
          // and cannot be bigger than 1fr (fractional unit) -> wtv space available
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {/* map out each note from the notes array */}
        {notes.map((note) => (
          <Note note={note} handleDeleteNote={handleDeleteNote} />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </Box>
    </Container>
  );
};

export default NotesList;
