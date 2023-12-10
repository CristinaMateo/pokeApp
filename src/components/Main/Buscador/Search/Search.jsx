import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ searchText, setSearchText, onSearch }) => {

  const [debouncedValue] = useDebounce(searchText, 1500);
  
  useEffect(()=> {
    onSearch()
  }, [debouncedValue])

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    
  };

  return (
    <div className="searcher">
      <input  className="searcher"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button  className="searcher"onClick={onSearch}>Buscar</button>
    </div>

  );
};

export default Search;
