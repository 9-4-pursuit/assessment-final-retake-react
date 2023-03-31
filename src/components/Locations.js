import React from 'react'
import { location } from '../services/constants';

function Locations() {
    // const [locationsArr, setLocationsArr ] = useState([]);
    // const [locationli, setLocationli] = useState('');

    function handleBtn(event) {
        event.preventDefault();

        const listedLocations = location();
        console.log(listedLocations)
        
    }
  return (
    <div>
        <h3>List of Locations</h3>
        <button onClick={handleBtn}>Show Locations</button>
        <ul>
            
        </ul>
    </div>
  )
}

export default Locations