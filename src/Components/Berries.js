import React, { useState, useEffect } from "react";

function Berries() {
  const [berryList, setBerryList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/berry/")
      .then((response) => response.json())
      .then((data) => setBerryList(data.results));
  }, []);

  return (
    <div>
      <label htmlFor="berry-dropdown">Select a berry:</label>
      <select id="berry-dropdown">
        {berryList.map((berry, index) => (
          <option key={index} value={berry.url}>
            {berry.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Berries;