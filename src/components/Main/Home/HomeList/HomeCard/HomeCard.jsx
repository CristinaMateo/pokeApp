import React from "react";

const HomeCard = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="card" key={pokemon.id}>
      <div className="pokeId"><span>#{pokemon.id}</span></div>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img className="pokeImg" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      <p className="pokeType">{pokemon.types.map(tipo => <span key={tipo.type.name}> {tipo.type.name.toUpperCase()}</span>)}</p>
    </div>
  );
};

export default HomeCard;
