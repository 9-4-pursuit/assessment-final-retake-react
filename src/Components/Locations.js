import React, { useState, useEffect } from 'react';

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/location/');
        const data = await response.json();
        setLocations(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchLocations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>List of Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.name}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;