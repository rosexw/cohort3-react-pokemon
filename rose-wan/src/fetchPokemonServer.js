// use this to fetch data
export function fetchPokemonServer(idOrName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites && pokemonData.sprites.front_default
  }));
}
    // .catch((error) => {console.error(`No Pokemon by ${pokemonData.name} found`)})
    // ;

export function fetchPokemonListServer() {
  return fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(checkStatus)
    .then(response => response.json())
    .then(pokemonData => ({
      results: pokemonData.results,
    }));
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
};
