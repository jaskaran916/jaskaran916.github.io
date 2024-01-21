// SearchBar.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../redux/actions/bookActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Dispatch a searchBooks action with the searchQuery
    dispatch(searchBooks(searchQuery));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
