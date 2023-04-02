import { useState} from "react"
import NotFound from "./NotFound"


export default function PokemonSearch() {

    const [searchTerm, setSearchTerm] = useState('')
    const [singlePokemon, setSinglePokemon] = useState({}) 

    function handleTextInput(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSearch(event) {
        event.preventDefault()

        await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then(response => response.json()).then(data => setSinglePokemon(data))
    }

    console.log(singlePokemon)

   

    // const finalPokemon = allPokemons.find(poke => poke.name.toLowerCase() === searchTerm.toLowerCase())


    // console.log(finalPokemon)

    // useEffect (() => {

    // }, [singlePokemon])


   


    return (
        <div>

            <h1>Search for a Pokemon</h1>

            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={searchTerm}
                onChange={handleTextInput}

                />
                <button>Submit</button>
            </form>


            {Object.keys(singlePokemon).length !== 0 ? (
                <div>
                    <h1>Name: {singlePokemon.name}</h1>
                    <img src={singlePokemon.sprites.front_default}/>
                    <h2>ID: {singlePokemon.id}</h2>
                    <h2>Height: {singlePokemon.height} ft</h2>
                    <h2>Weight: {singlePokemon.weight} lbs</h2>
                    

                </div>
            ) : 

                searchTerm !== '' && <NotFound/>}
        </div>
    )
}