import axios from "axios";

// install axios first npm install axios in the index.js
// rememeber: With axios you do not need to jsonify it
// You have to start with export because it is going to be SENT OUT to RANDOM component.
// then you MUST lead with an export because you're sending 


// the function is looking for a paramater, we don't know what the person is going to search for
// the query paramater is where the function is looking for from the end user
// try, asign the response to a variable, make it await have axios (the backend translator).get the api and if there is an error, grap it 
// and log it on the screen to let us know what the error is
// You must use template literal so that (query) parameter matches the  `${query}` in template literal


export async function getBerry (){
    try {
    const response = await axios.get ('https://pokeapi.co/api/v2/berry')
    return response 
} catch (error) {
    console.log (error)
}
}

export async function getFirmness (){
    try {
    const response = await axios.get ('https://pokeapi.co/api/v2/berry-firmness')
    return response 
} catch (error) {
    console.log (error)
}
}

export async function catchEm (){
    try {
    const response = await axios.get ('https://pokeapi.co/api/v2/pokemon')
    return response 
} catch (error) {
    console.log (error)
}
}

export async function getLocation () {
    try {
    const response = await axios.get ('https://pokeapi.co/api/v2/location')
    return response 
} catch (error) {
    console.log (error)
}
}

