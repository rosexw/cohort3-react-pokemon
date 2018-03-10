import { fetchPokemonServer } from '../fetchPokemonServer';


const fetchPokemonStart = () => {
  return {
    type: 'FETCH_POKEMON_START',
  };
}
const fetchPokemonSuccess = () => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
  };
}
const fetchPokemonError = (error) => {
  return {
    type: 'FETCH_POKEMON_ERROR',
  };
}

export const fetchPokemon = nameOrId => {
  return (dispatch) => {
    dispatch(fetchPokemonStart());
    fetchPokemonServer.then(
      pokemonData => dispatch(fetchPokemonSuccess())
    ).catch(
      error => dispatch(fetchPokemonError())
    );
  }
}
