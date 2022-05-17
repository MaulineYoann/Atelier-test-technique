import React from 'react';
import './Search.scss';

  const Search = ({ searchPlayer, setSearchPlayer }) => {
  const handleChange = (e) => setSearchPlayer(e.target.value);

  return (
    <input
      name="name"
      value={searchPlayer}
      onChange={handleChange}
      maxLength={12}
      type="text"
      placeholder="rechercher un joueur"
    />
  );
};

export default Search;
