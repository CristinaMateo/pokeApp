import React, { useState } from "react";
import Search from "../Search";
import Card from "./Card";

const ListaPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = (pokemonData) => {
    // Actualizar la lista de Pokemon con el nuevo Pokemon encontrado
    setPokemonList((prevList) => [...prevList, pokemonData]);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ListaPokemon;
