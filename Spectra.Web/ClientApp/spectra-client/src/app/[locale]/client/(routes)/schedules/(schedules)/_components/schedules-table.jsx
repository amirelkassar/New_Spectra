'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { schedulesColumns } from './schedules-columns';
import {
  DataTable,
  Table,
  TableCard,
} from '@/client/_components/ui';
import Card from '@/components/card';
import { CellActions } from './cell-actions';
import { CellDate } from './cell-date';
import { CellStatus } from './cell-status';

export const SchedulesTable = ({ data = [] }) => {
  const currentTab = useSearchParams()?.get('tab') || 'new';

  const filteredData = useMemo(() => {
    if (currentTab === 'old') {
      return data.filter((item) => item.status === 'done');
    }
    return data.filter((item) => item.status !== 'done');
  }, [data, currentTab]);

  return (
    <Card>
      <DataTable
        columns={schedulesColumns}
        data={filteredData}
      >
        <TableItem currentTab={currentTab} />
      </DataTable>

      <div className='flex flex-col space-y-5 mdl:hidden'>
        {filteredData.length ? (
          filteredData?.map((item, index) => (
            <CardItem key={index} item={item} />
          ))
        ) : (
          <TableCard.Fallback>
            {currentTab === 'new'
              ? 'لا يوجد مواعيد جديدة'
              : 'لا يوجد مواعيد سابقة'}
          </TableCard.Fallback>
        )}
      </div>
    </Card>
  );
};

const TableItem = ({ currentTab = '' }) => {
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
        <Table.Fallback>
          {currentTab === 'new'
            ? 'لا يوجد مواعيد جديدة'
            : 'لا يوجد مواعيد سابقة'}
        </Table.Fallback>
      </Table.Body>
    </Table>
  );
};

const CardItem = ({ item = {} }) => {
  return (
    <TableCard>
      <TableCard.Container
        className={
          item?.status === 'available'
            ? 'bg-blueLinerGradient shadow-md'
            : ''
        }
      >
        <TableCard.Body>
          <div className='grid grid-cols-2 gap-5'>
            <span>رقم الجلسة</span>
            <span className='font-bold'>{item?.label}</span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>اسم المعالج</span>
            <span className='font-bold'>
              {item?.doctor}
            </span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>اسم الطفل</span>
            <span className='font-bold'>{item?.child}</span>
          </div>
        </TableCard.Body>
        <TableCard.Footer>
          <CellDate date={item?.date} />
          <CellStatus status={item?.status} />
        </TableCard.Footer>
        <TableCard.Action>
          <CellActions data={item} />
        </TableCard.Action>
      </TableCard.Container>
    </TableCard>
  );
};
