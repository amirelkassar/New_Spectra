'use client';

import { useTranslations } from 'next-intl';

import { Table } from '@/client/_components/ui';

export const TableItem = () => {
  const t = useTranslations('appointments_obj');

  return (
    <Table
      className='border-separate border-spacing-y-5 -mt-5 hidden mdl:table'
      withRowBorders={false}
    >
      <Table.Head
        classNames={{
          th: 'bg-blueLighter font-medium first:rounded-s-2xl last:rounded-e-2xl text-xs lg:text-base p-3',
        }}
      />
      <Table.Body
        classNames={{
          tr: 'relative after:absolute after:w-full after:h-full after:bg-transparent after:rounded-2xl after:start-0 after:top-0 w-full group data-[status=available]:after:bg-blueLinerGradient data-[status=available]:after:shadow-md',
          td: 'first:rounded-s-2xl last:rounded-e-2xl transition group-hover:bg-blueLight group-data-[status=available]:group-hover:bg-transparent text-xs lg:text-base first:font-bold first:lg:text-xl first:ps-5 py-7 px-3 relative z-10',
        }}
      >
        <Table.Fallback>{t('no_appointments')}</Table.Fallback>
      </Table.Body>
    </Table>
  );
};
