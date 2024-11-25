'use client';

import { Table } from '@/components/table/table';

export const TableItem = () => {
  return (
    <Table className='mb-10' borderColor='#F5F5F5'>
      <Table.Head
        classNames={{
          th: 'bg-blueLighter font-normal first:rounded-s-2xl last:rounded-e-2xl text-base p-3',
          tr: 'border-0',
        }}
      />
      <Table.Body
        classNames={{
          tr: 'group',
          td: 'first:rounded-s-2xl last:rounded-e-2xl transition group-hover:bg-blueLight text-sm lg:text-base first:font-bold py-5 px-3',
        }}
      >
        <Table.Fallback>لا يوجد بيانات</Table.Fallback>
      </Table.Body>
    </Table>
  );
};
