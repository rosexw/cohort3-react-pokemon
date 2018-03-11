import { fetchPokemonServer } from '../fetchPokemonServer';


const fetchPokemonStart = () => {
  return {
    type: 'FETCH_POKEMON_START',
  };
}
const fetchPokemonSuccess = (pokemonData) => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    name: pokemonData.name,
    picture: pokemonData.picture
  };
}
const fetchPokemonError = (error) => {
  return {
    type: 'FETCH_POKEMON_ERROR',
  };
}

export function fetchPokemon(nameOrId){
  return (dispatch) => {
    dispatch(fetchPokemonStart());
    fetchPokemonServer(nameOrId).then(
      pokemonData => dispatch(fetchPokemonSuccess(pokemonData))
    ).catch(
      error => dispatch(fetchPokemonError())
    );
  }
}
