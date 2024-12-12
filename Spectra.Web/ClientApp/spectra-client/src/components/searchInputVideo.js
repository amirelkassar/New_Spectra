import SearchIcon from '@/assets/icons/search';
import { TextInput } from '@mantine/core';
import React from 'react';

function SearchInputVideo({ type = 'text', ...props }) {
  return (
    <div className='flex items-center gap-2 mb-2'>
      <div className='bg-greenMain p-2 rounded-full size-7 flex items-center justify-center'>
        <SearchIcon className='text-white w-full h-auto' />
      </div>
      <TextInput
        {...props}
        type={type}
        classNames={{
          input:
            '!h-9  lgl:!h-10 text-[12px] border md:text-base border-greenMain w-full rounded-xl  mdl:rounded-xl',
          label: 'text-[12px] md:text-base mb-2',
        }}
        className={'flex-1'}
      />
    </div>
  );
}

export default SearchInputVideo;
