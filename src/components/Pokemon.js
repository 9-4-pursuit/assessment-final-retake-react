

import { useState, useEffect } from "react";
import { getPokemon } from "../fetch";
import ChosenPokemon from "./ChosenPokemon"

export default function Pokemon() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  useEffect(() => {
    getPokemon()
    .then((res) => {
      setAllPokemon([...res]);
    });
  },[]);

  
  function onSearchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";

    const result = allPokemon.filter((pokemon) => {
      return (pokemon.name.toLowerCase() === searchText.toLowerCase());
    })[0]

    result ? 
    setPokemon(result) 
    :
    setPokemon({})
    setSearchSubmitted(true);
  }

  function searchTextChange(event) {
    setSearchText(event.target.value);
  }

  return (<div className="Pokemon">
    <h1>Search for a pokemon</h1>
    <form onSubmit={onSearchSubmit}>
      <input id="searchbox" type="text" onChange={searchTextChange}/>
      <button type="submit">Submit</button>
    </form>

    {(searchSubmitted && pokemon.name) ? <pokemon pokemon={pokemon}/> 
    :(searchSubmitted ? <p>Not Found</p> 
    : null)}

  </div>);
};