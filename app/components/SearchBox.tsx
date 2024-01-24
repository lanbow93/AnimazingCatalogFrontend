'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchBox() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('');
  return (
    <form >
      <input
        type='text'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={() => router.push(`/search?titleKeyword=${searchInput}`)}>
        <img src='/searchIcon.png' alt='magnifyingGlass Icon' />
      </button>
      </form>
  );
}
