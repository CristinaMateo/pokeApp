import React from "react";
import Card from "./Card";

const ListaPokemon = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ListaPokemon;
