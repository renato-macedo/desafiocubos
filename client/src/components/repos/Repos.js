import React, { useContext } from 'react';
import RepoItem from './RepoItem';

import GithubContext from '../../context/movie/movieContext';

function Repos() {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
}

export default Repos;
