import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokeContext } from "../../../context/PokeContext";


const New = () => {

  const { addPokemon } = useContext(PokeContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => addPokemon(data)



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">name:</label>
      <input type="text" {...register("name", { required: true })} />

      <label htmlFor="id">id:</label>
      <input type="number" {...register("id", { required: true })} />

      <label htmlFor="img">Img:</label>
      <input type="text" {...register("img", { required: true })} />

      <label htmlFor="typeOne">typeOne</label>
      <select {...register("typeOne", { required: true })}>
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option>
      </select>

      <label htmlFor="typeTwo">typeTwo</label>
      <select {...register("typeTwo", { required: false })}>
        <option value={null}>NONE</option>
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option>
      </select>

      <button >CREATE</button>
    </form>
  );
};

export default New;
