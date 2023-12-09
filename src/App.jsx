import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { PokeContext } from "./context/PokeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [newPokeList, setnewPokeList] = useState([]);

  const addPokemon = (newPokemon) =>{
    setnewPokeList([...newPokeList,newPokemon])
  }

  const pokeData ={newPokeList, addPokemon };

  return (
    <>
      <BrowserRouter>
        <Header />
        <PokeContext.Provider value={pokeData}>
          <Main />
        </PokeContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;