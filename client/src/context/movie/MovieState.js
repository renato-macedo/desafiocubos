import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import api from '../../services/api';
import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  MOVIE_NOT_FOUND,
} from '../types';

function MovieState(props) {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Movies
  async function searchMovies(text) {
    setLoading();

    console.log('Pesquisando: ', text);
    try {
      const res = await api.get(`/search?q=${text}`);

      console.log(res.data);
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_MOVIES,
        payload: [],
      });
    }
  }

  // Get Movie
  async function getMovie(id) {
    setLoading();
    try {
      const res = await api.get(`movies/${id}`);
      console.log(res.data);
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: MOVIE_NOT_FOUND,
        payload: { vote_average: '-', imdb_id: '' },
      });
    }

    // setAlert(null);
  }

  // Clear Movies
  function clearMovies() {
    dispatch({
      type: CLEAR_MOVIES,
    });
  }

  // Set Loading
  function setLoading() {
    return dispatch({ type: SET_LOADING });
  }

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        searchMovies,
        clearMovies,
        getMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieState;
