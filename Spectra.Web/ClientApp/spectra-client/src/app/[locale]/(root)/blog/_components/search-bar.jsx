'use client';

import SearchIcon from '@/assets/icons/search';
import { useMemo, useState } from 'react';

const articalsTab = [''];

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  const articalsTab = useMemo(
    () => [
      {
        key: 'general',
        value: 'عام',
      },
    ],
    []
  );

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(search);
  };

  return (
    <div className='container mx-auto w-full max-w-5xl'>
      <form
        onSubmit={handleSearch}
        className='flex items-center mdl:gap-5 gap-2 w-full'
      >
        <input
          className='w-full text-sm mdl:text-medium text-black h-7 mdl:h-16 px-10 py-1 bg-[#F5F5F5] rounded-full outline-none flex-1'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type='submit'
          className='rounded-full mdl:size-16 size-7 bg-greenMain flex items-center justify-center shrink-0'
        >
          <SearchIcon className='size-3 mdl:size-7' />
        </button>
      </form>
    </div>
  );
};
