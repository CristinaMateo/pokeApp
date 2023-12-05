import React, {  useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

    const [pokemonList, setPokemonList] = useState([]);

    const handleSearch = (pokemonData) => {
      setPokemonList((prevList) => [...prevList, pokemonData]);
    };

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;