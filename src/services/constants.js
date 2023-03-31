

export function getBerry() {
    return fetch('https://pokeapi.co/api/v2/berry').then((response) => response.json()).catch((e) => console.log(e))
}

export function firmness() {
    return fetch('https://pokeapi.co/api/v2/berry-firmness').then((response) => response.json()).catch((e) => console.log(e))
}

export function catchEmAll() {
    return fetch('https://pokeapi.co/api/v2/pokemon').then((response) => response.json()).catch((e) => console.log(e))
}

export function location(){
    return fetch('https://pokeapi.co/api/v2/location').then((response) => response.json()).catch((e) => console.log(e))
}
