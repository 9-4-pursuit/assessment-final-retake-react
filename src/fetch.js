function PokeAPIComponent() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonLocation, setPokemonLocation] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
        fetch(data.location_area_encounters)
          .then(response => response.json())
          .then(data => setPokemonLocation(data[0].location_area.name))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }, []);
  
  fetch('https://pokeapi.co/api/v2/location/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch('https://pokeapi.co/api/v2/berry/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Location: {pokemonLocation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PokeAPIComponent;