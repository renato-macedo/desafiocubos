import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem',
// };

function Movies() {
  const movieContext = useContext(MovieContext);

  const { loading, movies } = movieContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
