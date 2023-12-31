// components/SearchBar.js
import React from 'react';
import './searchBar.css'; 
const SearchBar = ({ searchQuery, setSearchQuery }) => {

  return (
    <>
          <h3>Search by keyword(s)</h3>
    <div className="search-bar">

      <input
      id='search'
        className="form-control"
        type="text"
        placeholder=""
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

    </div></>
  );
};

export default SearchBar;
