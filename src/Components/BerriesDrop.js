import { useState, useEffect } from "react"


export default function BerriesDrop() {

    const [allBerries, setAllBeries] = useState([])
    const [dropdown, setDropDown] = useState(null)


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/berry/').then(response => response.json()).then(data => setAllBeries(data))
    },[])
    



    return (
        <div>

        </div>
    )
}