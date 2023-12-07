import React from "react";
import HomeCard from "./HomeCard";

const HomeList = ({ allPokemon }) => {
  return (
    <div className="homeList">
      {allPokemon.map((pokemon, index) => (
        <HomeCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default HomeList;