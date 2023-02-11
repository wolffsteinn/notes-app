import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { css } from "@emotion/react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handleNoteSave = () => {
    // .trim() removes white spaces before the start of a character
    // and the end of the last character
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    } else {
      alert("Cannot save empty note!");
    }
  };

  // seems like i cannot style the note if the textarea is nested.
  const Item = styled("div")(() => ({
    minHeight: "170px",
    padding: "5px",
    backgroundColor: "#86efac",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }));

  const Footer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  return (
    <Grid item xs={4}>
      {/* cant place an item here... */}
      <div>
        <TextareaAutosize
          multiline
          placeholder="type here"
          value={text}
          onChange={handleChange}
          minRows={2}
          style={{
            backgroundColor: "#86efac",
            resize: "none",
            border: "none",
          }}
        />
        <Footer>
          <Typography variant="body2">
            {text.length} / {charLimit} characters
          </Typography>
          <Button onClick={handleNoteSave}>Save</Button>
        </Footer>
      </div>
    </Grid>
  );
};

export default AddNote;
