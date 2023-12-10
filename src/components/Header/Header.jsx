import React from "react";
import Nav from "./Nav";
import inicio from '../../assets/inicio.png'

const Header = () => {
  return (
  <header>
    <Nav/>
    <h1>PokéDex</h1>
    <img id="inicio" src={inicio} alt="imagen de inicio" />
  </header>);
};

export default Header;
