import React from 'react';

function SearchBar(options) {
  return (
    <div className='flexbox'>
    <input type="text" />
    <button onClick={options.onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;