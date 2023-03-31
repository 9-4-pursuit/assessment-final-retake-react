import React from 'react'
import { getBerry } from '../services/constants';
import { firmness } from '../services/constants';
import { useState, useEffect } from 'react';

function Berries() {
    const [ berry, setBerry] = useState([]);
    const [ berryName, setBerryName] = useState('');
    const [ firmCheck, setFirmCheck] = useState('');

     
     async function handleSelect(event){

    

        const berries =  await getBerry();
        console.log(berries, 'caught them all?');
        // console.log(berries.results[0].name);

        const firm = await firmness();
        console.log(firm);

        

        const selectedBerry = (event.target.value);
        console.log(selectedBerry)

        setBerryName(selectedBerry);
    
        setBerry(berries.results)
    }

    useEffect(() => {
        handleSelect()
    }, [])
    

  return (
    <div>
        <h3>Select a Type</h3>
        <form>
            <select onChange={handleSelect}>
                <option></option>
                {
                    berry.map((bType) => <option id='sample'>{bType.name}</option>)
                }
            </select>
        </form>
        <div className='display'>
            <h4>{berryName}</h4>
            <h4>{firmCheck}</h4>

        </div>
    </div>
  )
}

export default Berries