import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokeContext } from "../../../context/PokeContext";
import Pokemon from "../../Object/Object";


const New = () => {

  const { addPokemon } = useContext(PokeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    addPokemon(new Pokemon(
      data.id,
      data.name,
      data.image,
      data.typeOne,
      data.typeTwo
    ))
    reset()
  }


  return (
    <form className="new" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">name:</label>
      <input type="text" {...register("name", { required: true, minLength: 3 })} />
      {errors.name && <span>name has to have at least 3 chars</span>}

      <label htmlFor="id">id(greater than 1500):</label>
      <input type="number" {...register("id", { required: true, min: 1500 })} />
      {errors.id && <span>id has to be greater than 1500</span>}

      <label htmlFor="image">Img:</label>
      <input type="text" {...register("image", { required: true })} />

      <label htmlFor="typeOne">typeOne</label>
      <select {...register("typeOne", { required: true })}>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>

      <label htmlFor="typeTwo">typeTwo</label>
      <select {...register("typeTwo", { required: false })}>
        <option value={null}>NONE</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>

      <button >CREATE</button>
    </form>
  );
};

export default New;
