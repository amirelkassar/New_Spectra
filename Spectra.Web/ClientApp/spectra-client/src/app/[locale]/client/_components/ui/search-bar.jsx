'use client';

import { useMediaQuery } from '@mantine/hooks';

import { cn } from '@/lib/utils';
import SearchIcon from '@/assets/icons/search';
import Button from '@/components/button';

export const SearchBar = () => {
  const match = useMediaQuery('(min-width: 768px)');

  return (
    <div className='flex items-center justify-end grow gap-3 lg:gap-5'>
      <Button
        variant={match ? 'secondary' : 'blueLight'}
        className={cn(
          'shrink-0 p-0 size-9 mdl:size-11 rounded-full text-greenMain rotate-90 transition-none',
          match && 'text-white rotate-0'
        )}
      >
        <SearchIcon className='size-4 mdl:size-5' />
      </Button>

      <input
        name='search'
        type='text'
        className='grow hidden mdl:block h-10 bg-grayLight rounded-full px-5 focus:outline-greenMain caret-greenMain'
      />
    </div>
  );
};
