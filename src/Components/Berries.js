import React, {useState, useEffect} from 'react'
import {getBerry, getFirmness} from '../Services/Constants'

function Berries() {


  // there are 3 changes occuring here, and will need to create states to represent each one
  //
  const [berry, setBerry] = useState([])
  const [berryName, setBerryName] = useState('')
  const [firmness, setFirmness] = useState('')



  // we then have to create an async function to HANDLE THE CLICK
// The next line we will create a variable and SAVE the ANSWER to the variable
// const answer= await NameofFunction() basically saying wait till you get this function first
// then log it to the screen (nameofvariable.data.objectkey.objectkey)


  async function berrySelection(event) {
    const berries = await getBerry()
    console.log (berries.data.name)
    setBerry(berries.data.name)

    const firm = await getFirmness()
    console.log (firm.data.results.name)
    setFirmness (firm.data.results.name)
    
    const selectedBerry= (event.target.value);
    console.log (selectedBerry)

   setBerryName(selectedBerry);// this method applies the string name

   setBerry(berries.results) // this keys into the array of objects to pull that data


    }

  

  // whenever something needs to do something AFTER being rendered you pass the function to use effect, the function 
// in this case is berrySelection

useEffect(() => {
  berrySelection()
}, []) // / we pass second parameter [] when we only want it to set up only once on intial render
// otherwise it will fire after every render



  return (
    <div className= 'Berries'>
      <label for = 'Berries' >Select A Type</label>
      <select onChange={berrySelection}>
      <option value =''> </option>
      {Berries.map((berryType)=> (
        <option id='sample'>{berryType.name}</option>)
      )}
            
      </select>

    </div>
  )
}

export default Berries






/**- Displays the header "Select a Type" above a dropdown menu, centered.
- The dropdown menu should display a list of the berries available at `https://pokeapi.co/api/v2/berry/` (this will give the first 20 berries, by default).
- When a berry is chosen from the dropdown menu, the
  - `name`
  - `firmness` */