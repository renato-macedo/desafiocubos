/* eslint-disable camelcase */
import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.jpg';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';
const Movie = ({ match }) => {
  const movieDetails = useContext(MovieContext);

  const { movie, getMovie, loading } = movieDetails;

  useEffect(() => {
    async function fetchData() {
      await getMovie(match.params.id);
    }
    fetchData();

    // eslint-disable-next-line
  }, []);

  const {
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    genres,
    imdb_id,
  } = movie;
  console.log(release_date);
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
                : notfound
            }
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{title}</h1>
          {release_date && <p> {release_date.split('-')[0]}</p>}
        </div>
        <div>
          {overview && (
            <Fragment>
              <h3>Overview</h3>
              <p>{overview}</p>
            </Fragment>
          )}
          <a
            href={`https://www.imdb.com/title/${imdb_id ? imdb_id : ''}`}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on IMDb
          </a>
          <ul>
            <li>
              {genres && genres.length > 0 && (
                <Fragment>
                  <strong>Genres: </strong>
                  {genres.join(', ')}
                </Fragment>
              )}
            </li>
            <li>
              <Fragment>
                <strong>Vote Average: </strong>
                <span className="badge badge-success">{vote_average}</span>
              </Fragment>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
