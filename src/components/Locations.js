import { useState, useEffect } from "react";
import { getLocations } from "../fetch";

export default function Locations() {
  const [allLocations, setAllLocations] = useState([]);
  const [locationsShown, setLocationsShown] = useState(false)

  useEffect(() => {
    getLocations()
    .then((res) => {
        console.log(res)
      setAllLocations(res.results)
    });
  }, []);
  
  function toggleLocations() {
    setLocationsShown(!locationsShown);
  }

  return (<div className="locations">
    <h1>List of Locations</h1>
    <button onClick={toggleLocations}>{locationsShown ? "Hide Locations" : "Show Locations"}</button>

    {locationsShown ? 
    <ul>
      {allLocations.map((location) => {
        return <li>{location.name}</li>
      })}
    </ul> 
    : <ul></ul>}

  </div>);
};