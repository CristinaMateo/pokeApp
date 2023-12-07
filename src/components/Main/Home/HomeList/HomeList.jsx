import React from "react";
import HomeCard from "./HomeCard";

const HomeList = ({ allPokemon }) => {
  return (
    <div>
      {allPokemon.map((pokemon, index) => (
        <HomeCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default HomeList;