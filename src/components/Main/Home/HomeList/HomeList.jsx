import React from "react";
import { Link } from 'react-router-dom'
import HomeCard from "./HomeCard";

const HomeList = ({ allPokemon }) => {
  return (
    <div className="homeList">
      {allPokemon == undefined? <p>No hay pokemon</p> :
      allPokemon.map((pokemon, index) => (
        <Link className="toDetails" to={`/pokemon/${pokemon.name}`}><HomeCard key={index} pokemon={pokemon} /></Link>
      ))
      
      }
    </div>
  );
};

export default HomeList;