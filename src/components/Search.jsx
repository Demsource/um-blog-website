import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Search.css";

const Search = ({ searchText, handleSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search a blog..."
        value={searchText}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;
