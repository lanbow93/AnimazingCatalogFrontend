'use client';

import { useState } from 'react';

function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <input
        type='text'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={() => console.log('Success')}>
        <img src='/searchIcon.png' alt='magnifyingGlass Icon' />
      </button>
    </>
  );
}

export default SearchBox;
