import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Users from '../movies/Users';

function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
