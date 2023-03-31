import React, { useState, useEffect } from "react";

function PokeAPIComponent() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonLocation, setPokemonLocation] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
        fetch(data.location_area_encounters)
          .then(response => response.json())
          .then(data => setPokemonLocation(data[0].location_area.name))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Location: {pokemonLocation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PokeAPIComponent;