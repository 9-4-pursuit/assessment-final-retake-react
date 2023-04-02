import { useState } from "react"


export default function Locations() {

    const [allLocations, setAllLocations] = useState([])
    const [showButton, setShowButton] = useState(true)


    async function showLocations(event) {
        event.preventDefault()

        if (allLocations.length === 0) {

        await fetch('https://pokeapi.co/api/v2/location')
        .then(response => response.json())
        .then(data => {
            setAllLocations(data.results)
        })
    }

    setShowButton(!showButton)

    }



    return (
        <div>

            <h1>List of Locations</h1>
            <button onClick={showLocations}>
                {showButton ? "Show Locations" : "Hide Locations"}
                </button>

                {showButton || (
                    <ul>
                        {allLocations.map(location =>
                            <li key={location.name}>{location.name}</li>)}
                    </ul>
                )}

            {

            }


            
        </div>
    )
}