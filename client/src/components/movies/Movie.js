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
    getMovie(match.params.id);

    // eslint-disable-next-line
  }, []);

  const user = {
    name: '',
    avatar_url: 1,
    location: '',
    bio: true,
    blog: '',
    login: '',
    html_url: '',
    followers: '',
    following: '',
    public_repos: '',
    public_gists: '',
    company: '',
  };
  let {
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
  } = user;

  const { title, poster_path, release_date, overview } = movie;
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
            href={'https://www.imdb.com/title/tt7286456/'}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on IMDb
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          <span>Followers: </span>
          {followers}
        </div>
        <div className="badge badge-success">
          <span>Following: </span>
          {following}
        </div>
        <div className="badge badge-light">
          <span>Public Repos: </span>
          {public_repos}
        </div>
        <div className="badge badge-dark">
          <span>Public Gists: </span>
          {public_gists}
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
