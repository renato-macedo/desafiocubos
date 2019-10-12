import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => (
  <nav className="navbar bg-primary cubos-blue">
    <h1>
      <i className={icon} />
      {title}
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: 'Movie Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;
