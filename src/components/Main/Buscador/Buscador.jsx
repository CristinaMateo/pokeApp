import React, { useState } from "react";
import axios from 'axios';
import Search from './Search';
import HomeList from "../Home/HomeList";
import Pokemon from "../../Object/Object";

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

        setPokemonList((prevList) => [...prevList, new Pokemon(
          data.id, 
          data.name, 
          data.sprites.other.home.front_default,
          data.types[0].type.name, 
          data.types[1]?.type.name
          )]);
      } catch (error) {
        alert("pokemon no encontrado")
      }
    }
    setSearchText("");
  };

  return (
    <main>
      <Search searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      <HomeList pokeList={pokemonList} />
    </main>
  );
};

export default Buscador;

