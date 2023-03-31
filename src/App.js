import React from "react";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import Berries from "./Components/Berries";

function App() {
  return (
    <div>
      <h1>Pokemon Details:</h1>
      <Pokemon />
      <Locations locationUrl={"https://pokeapi.co/api/v2/pokemon/1/location_area_encounters"} />
      <Berries  heldItems={[{ item: { name: "cheri-berry", url: "https://pokeapi.co/api/v2/berry/126/" } }, { item: { name: "oran-berry", url: "https://pokeapi.co/api/v2/berry/128/" } }]} />
    </div>
  );
}

export default App;
