import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const Details = () => {

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const [pokemonDet, setPokemonDet] = useState();

  useEffect(() => {
    const fetchPokeDet = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemonDet({
          id: data.id,
          name: data.name,
          image: data.sprites.other.home.front_default,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1]?.type.name,
          ...data
        })
      } catch (error) {
        setPokemonDet({
          id: id,
          name: searchParams.get('name'),
          image: searchParams.get('image'),
          typeOne: searchParams.get('typeOne'),
          typeTwo: searchParams.get('typeTwo')
        })

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
        <img className="pokeImg" src={pokemonDet.image} alt={pokemonDet.name} />
        <p className="pokeType">
          <span key={pokemonDet.typeOne}> {pokemonDet.typeOne.toUpperCase()}</span>
          {pokemonDet.typeTwo && <span key={pokemonDet.typeTwo}> {pokemonDet.typeTwo.toUpperCase()}</span>}
        </p>
      </article>
  );
}

export default Details;
