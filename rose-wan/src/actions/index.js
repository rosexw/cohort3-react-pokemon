import { fetchPokemonServer, fetchPokemonListServer } from '../fetchPokemonServer';

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


const fetchPokemonListStart = () => {
  return {
    type: 'FETCH_POKEMON_LIST_START',
  };
}
const fetchPokemonListSuccess = (pokemonData) => {
  return {
    type: 'FETCH_POKEMON_LIST_SUCCESS',
    results: pokemonData.results
  };
}
const fetchPokemonListError = (error) => {
  return {
    type: 'FETCH_POKEMON_LIST_ERROR',
  };
}

export function fetchPokemonList(){
  return (dispatch) => {
    dispatch(fetchPokemonListStart());
    fetchPokemonListServer().then(
      pokemonData => dispatch(fetchPokemonListSuccess(pokemonData))
    ).catch(
      error => dispatch(fetchPokemonListError())
    );
  }
}
