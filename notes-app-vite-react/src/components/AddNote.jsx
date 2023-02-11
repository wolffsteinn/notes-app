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

// I think i can now?
// just need to shift the styled components (Emotion) OUT of the component
const Item = styled(Paper)(() => ({
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

const Text = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    console.log(e.target.value);
    if (charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteSave = () => {
    // .trim() removes white spaces before the start of a character
    // and the end of the last character
    if (text.trim().length > 0 && title.trim().length > 0) {
      handleAddNote(text, title);
      setTitle("");
      setText("");
    } else {
      alert("Cannot save empty title or note body!");
    }
  };

  return (
    <Grid item xs={4}>
      {/* cant place an item here... */}
      <Item>
        <Text>
          <TextField
            placeholder="Title..."
            value={title}
            onChange={handleTitleChange}
          />
          <TextareaAutosize
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
        </Text>
        <Footer>
          <Typography variant="body2">
            {text.length} / {charLimit} characters
          </Typography>
          <Button onClick={handleNoteSave}>Save</Button>
        </Footer>
      </Item>
    </Grid>
  );
};

export default AddNote;
