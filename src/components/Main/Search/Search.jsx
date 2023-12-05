import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");
  
  const handleSearch = () => {
    // Realizar la petición a la PokeApi con el nombre o número del Pokémon
    // Puedes utilizar fetch o axios para esto.
    // Asumiendo que usas fetch:
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        // Enviar el Pokemon encontrado al componente padre (ListaPokemon)
        onSearch(data);
      })
      .catch(error => console.error("Error fetching Pokemon:", error));

    // Resetear el valor del input después de la búsqueda
    setPokemonName("");
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;
