import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import HomeCard from "./HomeCard";
import { PokeContext } from "../../../../context/PokeContext";

const HomeList = ({ pokeList }) => {
  const { newPokeList } = useContext(PokeContext)

  const allPokemon = newPokeList.concat(pokeList)

  return (
    <div className="homeList">

      {allPokemon == [] ? <p>No hay pokemon</p> :
        allPokemon.map((pokemon, index) => (
          <Link className="toDetails" to={`/pokemon/${pokemon.id}`}><HomeCard key={index} pokemon={pokemon} /></Link>
        ))

      }
    </div>
  );
};

export default HomeList;