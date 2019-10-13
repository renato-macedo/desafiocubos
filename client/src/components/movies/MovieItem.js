/* eslint-disable camelcase */
import React from 'react';

import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.jpg';
const Movie = ({ movie: { poster_path, title, id } }) => {
  return (
    <div className="card text-center">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
            : notfound
        }
        alt="poster_path"
        className="img"
        style={{ width: '60px' }}
      />
      <h3>{title}</h3>
      <div>
        <Link
          to={`/movies/${id}`}
          className="btn btn-dark btn-sm my-1"
          rel="noopener noreferrer"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default Movie;
