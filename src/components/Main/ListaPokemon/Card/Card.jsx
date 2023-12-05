import React from "react";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default Card;
