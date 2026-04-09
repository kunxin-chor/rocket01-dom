const BASE_API_URL="https://pokeapi.co/api/v2/";

// async function returns a promise
// a promise is a function that is pending completion 
// when a promise is resolved, we can proceed to do something
// with the return of the promise
async function getData(pokemonName) {
    // GET is one of the HTTP protocol (aka verb)
    // it is used for fetching data

    // axios.get returns  a promise
    const response = await axios.get(BASE_API_URL + `pokemon/${pokemonName}`);
    // const response = await <Promise>
    // const response = <return from the Promise> when then the promise finishes
    return response.data;
}