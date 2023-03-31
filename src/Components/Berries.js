import React, { useState, useEffect } from 'react';

function Berries() {
  const [berries, setBerries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBerries() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/berry/');
        const data = await response.json();
        setBerries(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchBerries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>List of Berries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Growth Time</th>
            <th>Max Harvest</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {berries.map((berry) => (
            <tr key={berry.name}>
              <td>{berry.name}</td>
              <td>{berry.growth_time}</td>
              <td>{berry.max_harvest}</td>
              <td>{berry.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Berries;