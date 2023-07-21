// components/SearchBar.js
import React from 'react';
import './searchBar.css'; // Import the CSS file

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  return (
    <div className="search-bar">
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;