import React from 'react';

const SearchBar= () => {
  return (
    <div className="searchbar-container">
      <form className="searchbar-form">
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
        />
      </form>
      <button className="search-button button">
        <div className="search-button icon"></div>
      </button>
    </div>
  );
};

export default SearchBar;