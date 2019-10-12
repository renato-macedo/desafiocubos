import React, { useState, useContext } from 'react';

import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const movieContext = useContext(MovieContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = movieContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const search = e => {
    e.preventDefault();

    if (text) {
      searchUsers(text);
      setText('');
    } else {
      setAlert('Please enter something', 'light');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={search}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <button
          type="submit"
          value="Search"
          className="btn btn-block cubos-gray"
        >
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button
          type="submit"
          className="btn btn-link btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
