import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import HomeList from './HomeList';
import Pokemon from '../../Object';

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);



  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
        const pokemonData = response.data.results;

        const pokeData = await Promise.all(pokemonData.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          const pokemonFull = pokeResponse.data;

          return new Pokemon(
            pokemonFull.id, 
            pokemonFull.name, 
            pokemonFull.sprites.other.home.front_default,
            pokemonFull.types[0].type.name, 
            pokemonFull.types[1]?.type.name
            )
        }));

        setAllPokemon(pokeData);

      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchAllPokemon();
  }, []);

  return (
    <>
      <section id="home">
        
        <article className="pokemon-container">
          <HomeList pokeList={allPokemon} />
        </article>
      </section>
    </>
  );
};

export default Home