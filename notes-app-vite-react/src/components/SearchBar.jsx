import React from "react";
import { MdSearch } from "react-icons/md";
import { styled } from "@mui/material/styles";

const Container = styled("div")(() => ({
  backgroundColor: "#9ca3af",
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  borderRadius: "10px",
  padding: "5px",
  height: "32px",
}));

const TextInput = styled("input")(() => ({
  width: "500px",
  backgroundColor: "#9ca3af",
  border: "none",
  "&:focus": {
    outline: "none",
    border: "none",
  },
}));

const SearchBar = ({ handleSearchNote }) => {
  return (
    <Container>
      <MdSearch size="1.3em" />
      <TextInput
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </Container>
  );
};

export default SearchBar;
