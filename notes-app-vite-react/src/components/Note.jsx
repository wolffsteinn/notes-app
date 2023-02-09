import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Note = () => {
  const Item = styled(Paper)(() => ({
    backgroundColor: "pink",
    textAlign: "center",
  }));

  return (
    <Grid item xs={4}>
      <Item>
        hello
        <p>This is our first note! Let's go!!</p>
        <Button>Hello there</Button>
        <div>
          <span>09/02/2023</span>
          <MdDeleteForever />
        </div>
      </Item>
    </Grid>
  );
};

export default Note;
