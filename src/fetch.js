
const BASE_URL = 'https://pokeapi.co/api/v2/'

export async function getBerries() {
    return await fetch(`${BASE_URL}berry/`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
}

export async function getPokemon() {
    return await fetch(`${BASE_URL}pokemon/`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
}

export async function getLocations() {
    return await fetch(`${BASE_URL}location/`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
}