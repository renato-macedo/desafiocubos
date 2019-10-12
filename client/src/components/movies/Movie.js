/* eslint-disable camelcase */
import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

import Spinner from '../layout/Spinner';
import GithubContext from '../../context/movie/movieContext';
const User = ({ match }) => {
  const githubUser = useContext(GithubContext);

  const { user, getUser, loading, repos, getRepos } = githubUser;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>
            Location:
            {` ${location}` // eu não sei usar eslint
            }
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={'https://www.imdb.com/title/tt7286456/'}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar no IMDb
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
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
