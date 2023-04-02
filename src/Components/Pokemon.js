import React from 'react'
import { catchEm } from '../Services/Constants'

export default function Pokemon() {


    const [pokemon, setPokemon] = useState([]);
    const [ name, setName] = useState('');
    const [ id, setId] = useState('');
    const [ img, setImg] = useState('');
    const [ notFound, setNotFound] = useState('')

  // we then have to create an async function to HANDLE THE CLICK
// The next line we will create a variable and SAVE the ANSWER to the variable
// const answer= await NameofFunction() basically saying wait till you get this function first
// then log it to the screen (nameofvariable.data.objectkey.objectkey)

async function findPokemon(event){
  event.preventDefault();

  const pMons = await catchEm()
    console.log (pMons.data.results.name)
    const findSearch = event.target.search.value
    console.log(findSearch)
    setPokemon(pMons.data.results.name)

let found= pokemon.find((poke=>{
  console.log(poke.name)
  if (findSearch=== poke.name){
    setName (poke.name)
    setId(poke.id)
    setImg()
    
  } else {
    setNotFound('Pokemon not found!')
}
})
console.log(found)



}






// Lets get our form set up
  return (
    <div>
      
      <h3>Search for a Pokemon</h3>
        <form onSubmit={findPokemon}>
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











/* Displays the header "Search for a Pokemon" above a text input with an input type `submit`.
- When a user inputs text and presses "submit"
  - `name`
  - `sprites.front_default`
  - `id`*/ 