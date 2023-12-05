import React from "react";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div key={pokemon.id}>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.types.map(tipo => <span key={tipo.type.name}> {tipo.type.name.toUpperCase()}</span>)}</p>
    </div>
  );
};

export default Card;
