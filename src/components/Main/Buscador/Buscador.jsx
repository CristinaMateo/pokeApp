import React, { useState } from "react";
import axios from 'axios';
import Search from './Search'
import ListaPokemon from "./ListaPokemon";

const Buscador = () => {
  const [searchText, setSearchText] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = async () => {
  
    const busqueda = (element) => element.name === searchText.toLocaleLowerCase() || element.id == searchText

    if (searchText.trim() == "") return
    if (!pokemonList.some(busqueda)) {

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`);
        const data = response.data;

        setPokemonList((prevList) => [...prevList, data]);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }
    setSearchText("");
  };

  return (
    <main>
      <Search searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      <ListaPokemon pokemonList={pokemonList} />
    </main>
  );
};

export default Buscador;

