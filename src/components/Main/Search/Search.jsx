import React from "react";

const Search = ({ searchText, setSearchText, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default Search;
