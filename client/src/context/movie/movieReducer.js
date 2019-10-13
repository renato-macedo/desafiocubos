import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  MOVIE_NOT_FOUND,
} from '../types';

export default function(state, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case MOVIE_NOT_FOUND:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
