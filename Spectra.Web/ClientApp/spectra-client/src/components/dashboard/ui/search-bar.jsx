'use client';

import { useEffect, useState } from 'react';
import {
  useDebouncedValue,
  useMediaQuery,
} from '@mantine/hooks';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/navigation';

import { cn } from '@/lib/utils';
import SearchIcon from '@/assets/icons/search';
import Button from '@/components/button';

export const SearchBar = () => {
  const match = useMediaQuery('(min-width: 768px)');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams =
    useSearchParams()?.get('search') ?? '';

  const [search, setSearch] = useState(searchParams);

  const [debounced] = useDebouncedValue(search, 500);

  useEffect(() => {
    if (debounced === searchParams) return;

    if (debounced) {
      router.replace(`?search=${debounced}`);
    } else {
      const currentParams = new URLSearchParams(
        window.location.search
      );
      currentParams.delete('search');
      router.replace(`?${currentParams.toString()}`);
    }
  }, [debounced, router, searchParams]);

  useEffect(() => {
    setSearch('');
  }, [pathname]);

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
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
