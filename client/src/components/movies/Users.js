import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

function Users() {
  const movieContext = useContext(MovieContext);

  const { loading, users } = movieContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map(user => (
        <MovieItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
