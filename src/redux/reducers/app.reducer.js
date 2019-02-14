import {FILTER_POKEMONS, GET_POKEMONS_FAIL, GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS, SET_POKEMONS} from '../constants';

const initialState = {
  isFetched: false,
  error: null,
  pokemons: [],
  displayedPokemons: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        isFetched: true,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetched: false,
      };

    case GET_POKEMONS_FAIL:
      return {
        ...state,
        isFetched: false,
        error: action.payload,
      };

    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_POKEMONS:
      return {
        ...state,
        displayedPokemons: action.payload,
      };

    default:
      return state;
  }
}
