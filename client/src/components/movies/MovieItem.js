/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt="avatar_url"
      className="round-img"
      style={{ width: '60px' }}
    />
    <h3>{login}</h3>
    <div>
      <Link
        to={`/movies/${login}`}
        className="btn btn-dark btn-sm my-1"
        rel="noopener noreferrer"
      >
        Detalhes
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
