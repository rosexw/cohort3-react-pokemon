const initialState = {
  loading: false
};

const pokemonApp = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_START':
      return {
        ...state,
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
        }
    default:
      return state;
  }
}

export default pokemonApp;
