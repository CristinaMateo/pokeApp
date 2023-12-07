import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import HomeList from './HomeList';
import inicio from '../../../assets/inicio.png'

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`);
        const pokemonData = response.data.results;

        const pokeData = await Promise.all(pokemonData.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          const pokemonFull = pokeResponse.data;

          return {
            ...pokemon,
            ...pokemonFull,
          };
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
      <img src={inicio} alt="imagen de inicio" />
      <HomeList allPokemon={allPokemon} />
    </>
  );
};

export default Home