import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Buscador from "./Buscador";
import Home from "./Home";


const Main = () => {
  

  return (
    <main>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Buscador />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;

