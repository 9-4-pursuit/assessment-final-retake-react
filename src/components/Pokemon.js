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
      setAllPokemon(res.results);
    });
  },[]);
  
  function onSearchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";

    const searchedPokemon = allPokemon.filter((poke) => {
        return poke.name === searchText
    })

    searchedPokemon ? 
    setPokemon(searchedPokemon[0]) 
    :
    setPokemon({})
    setSearchSubmitted(true);
  }

  function searchTextChange(event) {
    setSearchText(event.target.value);
  }

  return (<div className="Pokemon">
    <h1>Search for a Pokemon</h1>
    <form onSubmit={onSearchSubmit}>
      <input id="searchbox" type="text" placeholder="Find Your Pokemon" onChange={searchTextChange}/>
      <input type="submit" />
    </form>

    {(searchSubmitted && pokemon.name) ? <ChosenPokemon pokemon={pokemon}/> 
    :(searchSubmitted ? <p>Pokemon not found! Try another name or ID number</p> 
    : null)}

  </div>);
};