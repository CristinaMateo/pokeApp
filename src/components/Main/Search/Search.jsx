import React from "react";

const Search = ({ searchText, setSearchText, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit" >Buscar</button>
    </form>

  );
};

export default Search;
