'use client';

import { Pagination as MantinePagination } from '@mantine/core';
import { useRouter } from '@/navigation';

import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';
import Spinner from '@/assets/icons/spinner';

export const Pagination = ({
  pageSize,
  totalCount,
  pageNumber = 1,
  disabled = false,
}) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalCount / pageSize);
  const hasPagination = totalPages > 1;
  const currentPage = Number(pageNumber) || 1;

  if (!hasPagination) return null;

  const updatePage = (newPage) => {
    if (typeof window === undefined) return;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', newPage.toString());
    router.replace(`?${searchParams.toString()}`);
  };

  return (
    <div className='font-bold flex ltr:flex-row-reverse items-center justify-between'>
      <Button
        className='py-1.5 text-xs lg:text-base px-3 lg:px-6 gap-2 lg:gap-4 rounded-lg'
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
      >
        <ArrowLeft className='rotate-180 size-3 mdl:size-5' />
        التالي
      </Button>

      {disabled && (
        <Spinner className='text-grayDark size-9 animate-spin' />
      )}
      {!disabled && (
        <MantinePagination
          total={totalPages}
          dir='ltr'
          classNames={{
            control: '!bg-white hover:!bg-black/5 !transition',
          }}
          size='xs'
          radius='xl'
          withControls={false}
          value={currentPage}
          onChange={(value) => updatePage(value)}
        />
      )}

      <Button
        className='py-1.5 px-3 lg:px-6 gap-2 text-xs lg:text-base lg:gap-4 rounded-lg'
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
      >
        <ArrowLeft className='size-3 mdl:size-5' />
        السابق
      </Button>
    </div>
  );
};
