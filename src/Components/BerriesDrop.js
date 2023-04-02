import { useState, useEffect } from "react"


export default function BerriesDrop() {

    const [allBerries, setAllBeries] = useState([])
    const [selectBerry, setSelectBerry] = useState(null)
    const [dropdownValue, setDropDownValue] = useState('')


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/berry/').then(response => response.json()).then(data => setAllBeries(data.results))
    },[])

    console.log(allBerries)

    function handleTypeChange(event) {
        setDropDownValue(event.target.value)
    }

    useEffect(() => {
        if (dropdownValue) {
            fetch(dropdownValue).then(response => response.json()).then(data => setSelectBerry(data))
        } else {
            setSelectBerry(null)
        }
    }, [dropdownValue])

    console.log(dropdownValue)



    return (
        <div>

            <h1>Select a Type</h1>
            <select onChange={handleTypeChange} value={dropdownValue}>
                <option value=''>Empty</option>

                {
                    allBerries.map(type => (
                        <option value={type.url} key={type.name}>
                            {type.name}
                        </option>
                    ))
                }
            </select>

            {selectBerry && (
                <div>
                    <h2>Name: {selectBerry.name}</h2>
                    <h4>Firmness: {selectBerry.firmness.name}</h4>
                </div>
            )}

        </div>
    )
}