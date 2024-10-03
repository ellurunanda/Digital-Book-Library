import React from 'react';
import './SearchBar.css'; 

function SearchBar({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search books by title..."
        onChange={handleSearch}
      />
      <button className="searchbar-button">Search</button>
    </div>
  );
}

export default SearchBar;
