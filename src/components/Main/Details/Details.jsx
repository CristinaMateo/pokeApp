import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const Details = () => {

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const [pokemonDet, setPokemonDet] = useState();

  useEffect(() => {
    const fetchPokeDet = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemonDet({
          id: data.id,
          name: data.name,
          image: data.sprites.other.home.front_default,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1]?.type.name,
          ...data
        })
      } catch (error) {
        setPokemonDet({
          id: id,
          name: searchParams.get('name'),
          image: searchParams.get('image'),
          typeOne: searchParams.get('typeOne'),
          typeTwo: searchParams.get('typeTwo')
        })

      }

    }
    fetchPokeDet();
  }, []);

  //en fase 2 añadir detalles de base stats

  return (
    pokemonDet === undefined ?
      <p>Buscando...</p> :

      <article id="pokeDet" className={pokemonDet.typeOne} >
        <div id="pokeId"><span className="pokeDet">#{pokemonDet.id}</span></div>

        <h2 className="pokeDet ">{pokemonDet.name.charAt(0).toUpperCase() + pokemonDet.name.slice(1)}</h2>

        <article id="nocolor">
          <img className="pokeDetImg" src={pokemonDet.image} alt={pokemonDet.name} />

          <p className="pokeDet">
            <span key={pokemonDet.typeOne} className={pokemonDet.typeOne}> {pokemonDet.typeOne.charAt(0).toUpperCase() + pokemonDet.typeOne.slice(1)}</span>

            {pokemonDet.typeTwo && <span key={pokemonDet.typeTwo} className={pokemonDet.typeTwo}> {pokemonDet.typeTwo.charAt(0).toUpperCase() + pokemonDet.typeTwo.slice(1)}</span>}

          </p>

      {pokemonDet.abilities &&
          <table>
            <tr>
              <th className="separador">
                <div className="table">
                  {pokemonDet.abilities.map((ability, index) => (
                    <React.Fragment key={ability.ability.name}>
                      {ability.ability.name}
                      {index < pokemonDet.abilities.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                Moves
              </th>

              <th className="separador">
                <div className="table">
                  <td>{pokemonDet.height}0 cm</td>
                </div>
                height
              </th>

              <th>
                <div className="table">
                  <td>{pokemonDet.weight}000 g</td>
                </div>
                weight
              </th>
            </tr>
          </table>}
        </article>


      </article>

  );
}

export default Details;
