'use client';

import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';

import { cn } from '@/lib/utils';
import SearchIcon from '@/assets/icons/search';

export const SearchBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()?.get('search') ?? '';

  const [search, setSearch] = useState(searchParams);
  const [debounced] = useDebouncedValue(search, 500);

  useEffect(() => {
    if (debounced === searchParams) return;

    const currentParams = new URLSearchParams(window.location.search);
    if (debounced) {
      currentParams.set('search', debounced);
    } else {
      currentParams.delete('search');
    }
    currentParams.delete('page'); // Remove `page` when updating `search`
    router.replace(`?${currentParams.toString()}`);
  }, [debounced, router, searchParams]);

  useEffect(() => {
    setSearch('');
  }, [pathname]);

  return (
    <div className='flex items-center justify-end grow gap-3 lg:gap-5'>
      <button
        variant='blueLight'
        className={cn(
          'shrink-0 p-0 size-9 mdl:size-11 rounded-full text-greenMain rotate-90 transition-none bg-blueLight mdl:bg-greenMain mdl:text-white mdl:rotate-0 flex items-center justify-center'
        )}
      >
        <SearchIcon className='size-4 mdl:size-5' />
      </button>

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
