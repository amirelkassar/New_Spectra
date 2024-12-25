'use client';

import { Pagination as MantinePagination } from '@mantine/core';
import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';
import { useTranslations } from 'next-intl';

export const Pagination = ({
  page = 1,
  setPage = () => {},
  data = [],
  noPerPage = 4,
}) => {
  const totalPages = Math.ceil(data.length / noPerPage);

  const t = useTranslations('general_obj');

  return (
    data.length > noPerPage && (
      <div className='font-bold flex ltr:flex-row-reverse items-center justify-between'>
        <Button
          className='py-1.5 text-xs lg:text-base px-3 lg:px-6 gap-2 lg:gap-4 rounded-lg'
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          disabled={page === totalPages}
        >
          <ArrowLeft className='rotate-180' />
          {t('next')}
        </Button>

        <MantinePagination
          total={totalPages}
          dir='ltr'
          classNames={{
            control: '!bg-white hover:!bg-black/5 !transition',
          }}
          size='sm'
          radius='xl'
          withControls={false}
          value={page}
          onChange={(value) => setPage(value)}
        />

        <Button
          className='py-1.5 px-3 lg:px-6 gap-2 text-xs lg:text-base lg:gap-4 rounded-lg'
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          disabled={page === 1}
        >
          <ArrowLeft />
          {t('previous')}
        </Button>
      </div>
    )
  );
};
