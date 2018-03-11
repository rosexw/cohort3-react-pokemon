const initialState = {
  loading: false,
  results: [],
  error: null,
  name: '',
  picture: ''
};

const pokemonApp = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_START':
      return {
        ...state,
        results: [],
        loading: true,
        error: null
      };
    case 'FETCH_POKEMON_SUCCESS':
        return {
          ...state,
          name: action.name,
          picture: action.picture,
          loading: false,
          error: null
        };
    case 'FETCH_POKEMON_ERROR':
        return {
          ...state,
          loading: false,
          error: "Pokemon cannot be fetched. Please type in another Pokemon."
        };
    case 'FETCH_POKEMON_LIST_START':
      return {
        ...state,
        name: '',
        picture: '',
        loading: true,
        error: null
      };
    case 'FETCH_POKEMON_LIST_SUCCESS':
        return {
          ...state,
          results: action.results,
          loading: false,
          error: null
        };
    case 'FETCH_POKEMON_LIST_ERROR':
        return {
          ...state,
          loading: false,
          error: "Pokemon List cannot be fetched. Please type in a Pokemon."
        };
    default:
      return state;
  }
}

export default pokemonApp;
