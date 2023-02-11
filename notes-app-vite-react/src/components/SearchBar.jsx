import React from "react";
import { MdSearch } from "react-icons/md";
import { css } from "@emotion/css";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div
      className={css`
        background-color: #9ca3af;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-radius: 10px;
        padding: 5px;
        &:focus {
          outline: none;
          border: none;
        }
      `}
    >
      <MdSearch size="1.3em" />
      {/* have to do inline CSS cause emotion doesnt support??  */}
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to search..."
        style={{ backgroundColor: "#9ca3af", border: "none" }}
      />
    </div>
  );
};

export default SearchBar;
