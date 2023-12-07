import React from "react";
import HomeCard from "./HomeCard";

const HomeList = ({ allPokemon }) => {
  return (
    <div className="homeList">
      {allPokemon == undefined? <p>No hay pokemon</p> :
      allPokemon.map((pokemon, index) => (
        <HomeCard key={index} pokemon={pokemon} />
      ))
      
      }
    </div>
  );
};

export default HomeList;