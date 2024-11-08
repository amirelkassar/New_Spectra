'use client';

import { Pagination } from '@mantine/core';
import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';

export const PaginationBtns = ({
  page = 1,
  setPage = () => {},
  data = [],
  noPerPage = 4,
}) => {
  const totalPages = Math.ceil(data.length / noPerPage);

  return (
    data.length > noPerPage && (
      <div className='font-bold flex ltr:flex-row-reverse items-center justify-between'>
        <Button
          className='py-1.5 text-xs lg:text-base px-3 lg:px-6 gap-2 lg:gap-4 rounded-lg'
          onClick={() =>
            setPage(page < totalPages ? page + 1 : page)
          }
          disabled={page === totalPages}
        >
          <ArrowLeft className='rotate-180' />
          التالي
        </Button>

        <Pagination
          total={totalPages}
          dir='ltr'
          classNames={{
            control:
              '!bg-white hover:!bg-black/5 !transition',
          }}
          size='sm'
          radius='xl'
          withControls={false}
          value={page}
          onChange={(value) => setPage(value)}
        />

        <Button
          className='py-1.5 px-3 lg:px-6 gap-2 text-xs lg:text-base lg:gap-4 rounded-lg'
          onClick={() =>
            setPage(page > 1 ? page - 1 : page)
          }
          disabled={page === 1}
        >
          <ArrowLeft />
          السابق
        </Button>
      </div>
    )
  );
};
