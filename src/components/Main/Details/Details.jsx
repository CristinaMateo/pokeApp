import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const Details = () => {

  const { id } = useParams();
  const [pokemonDet, setPokemonDet] = useState();

  useEffect(() => {
    const fetchPokeDet = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data)

        setPokemonDet(data)
      } catch (error) {
        alert("pokemon no encontrado")
      }

    }
    fetchPokeDet();
  }, []);

  return (
    pokemonDet === undefined ?
      <p>Buscando...</p> :
      <article>
        <span>{pokemonDet.id}</span>
        <h2>{pokemonDet.name.charAt(0).toUpperCase() + pokemonDet.name.slice(1)}</h2>
        <img className="pokeImg" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        <p className="pokeType">{pokemon.types.map(tipo => <span key={tipo.type.name}> {tipo.type.name.toUpperCase()}</span>)}</p>
      </article>
  );
}

export default Details;
