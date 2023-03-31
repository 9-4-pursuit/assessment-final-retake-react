import React, { useState } from 'react'
import { catchEmAll } from '../services/constants'

function Pokemon() {
    const [pokeman, setPokemon] = useState([]);
    const [ name, setName] = useState('');
    const [ id, setId] = useState('');
    const [ img, setImg] = useState('');
    const [ notFound, setNotFound] = useState('');


    async function handleClick(event){
        event.preventDefault();


        const pokemons = await catchEmAll();
        console.log(pokemons.results);
        const searchValue = event.target.search.value
        console.log(searchValue);

        setPokemon(pokemons.results);

        let found = pokeman.find((poki) => {
           console.log(poki.name)
        if(searchValue === poki.name){
            setName(poki.name);
            setId(poki.id);
            setImg(poki.sprites.front_default)
        } else {
            setNotFound('Pokemon not found!')
        }
        })

        console.log(found)
        // if(searchValue === pokemons.results.name){
        //     setName(pokemons.species.name);
        //     setId(pokemons.species.id);
        //     setImg(pokemons.species.sprites.front_default)
        // } else {
        //     console.log('nah')
        // }

        //setPokemon(pokemons.results)
    }

  return (

    <div>
        <h3>Search for a Pokemon</h3>
        <form onSubmit={handleClick}>
            <input type='text' id='search' placeholder='Find Your Pokemon'/>
            <input type='submit' value='Submit'/>
        </form>
        <div>
            {name}
            <img src={img} />
            {id}
            {notFound}
        </div>
    </div>
  )
}

export default Pokemon