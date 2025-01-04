'use client';

import { useState } from 'react';

import SearchIcon from '@/assets/icons/search';

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // console.log(search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='flex flex-row items-center mdl:gap-5 gap-2 w-full'
    >
      <input
        className='w-full text-sm mdl:text-medium text-black h-7 mdl:h-16 mdl:px-10 px-5 py-1 bg-[#F5F5F5] rounded-full outline-none flex-1'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type='submit'
        className='rounded-full mdl:size-16 size-7 bg-greenMain flex items-center justify-center shrink-0'
      >
        <SearchIcon className='size-3 mdl:size-7 text-white' />
      </button>
    </form>
  );
};
