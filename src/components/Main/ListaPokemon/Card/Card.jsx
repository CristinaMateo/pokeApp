import React from "react";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      
    </div>
  );
};

export default Card;
