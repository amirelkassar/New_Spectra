'use client';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableThead,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
} from '@mantine/core';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';

export function DataTable({
  columns = [],
  data = [],
  fallback = 'لا يوجد بيانات',
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Fragment>
      <TableUi
        fallback={fallback}
        table={table}
        columns={columns}
      />

      <MobileCards fallback={fallback} table={table} />
    </Fragment>
  );
}

const TableUi = ({ table, columns, fallback }) => {
  return (
    <Table
      className='border-separate border-spacing-y-5 -mt-5 hidden mdl:table'
      withRowBorders={false}
    >
      <TableThead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableTr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableTh
                  className='bg-blueLight font-medium first:rounded-s-2xl last:rounded-e-2xl text-xs lg:text-base p-3 text-center'
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableTh>
              );
            })}
          </TableTr>
        ))}
      </TableThead>
      <TableTbody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableTr
              key={row.id}
              className={cn(
                'relative after:absolute after:w-full after:h-full after:bg-transparent after:rounded-2xl after:start-0 after:top-0 w-full',
                {
                  'after:bg-blueLinerGradient after:shadow-md':
                    row?.original?.status === 'available',
                },
                {
                  group:
                    row?.original?.status !== 'available',
                }
              )}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableTd
                  className={cn(
                    'first:rounded-s-2xl last:rounded-e-2xl transition group-hover:bg-blueLight text-xs lg:text-base first:font-bold first:lg:text-xl first:ps-5 py-7 px-3 relative z-10'
                  )}
                  key={cell.id}
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableTd>
              ))}
            </TableTr>
          ))
        ) : (
          <TableTr>
            <TableTd
              colSpan={columns?.length}
              className='h-24 text-center'
            >
              {fallback}
            </TableTd>
          </TableTr>
        )}
      </TableTbody>
    </Table>
  );
};

const MobileCards = ({ table, fallback }) => {
  const tableHeaders = table.getHeaderGroups()[0].headers;

  return (
    <div className='flex flex-col space-y-5 mdl:hidden'>
      {table.getRowModel().rows?.length ? (
        table
          .getRowModel()
          .rows.map((row) => (
            <Card
              key={row.id}
              row={row}
              headers={tableHeaders}
            />
          ))
      ) : (
        <div className='p-5 rounded-xl flex items-center justify-center h-40 text-center text-xs border-4 border-blueLight'>
          {fallback}
        </div>
      )}
    </div>
  );
};

const Card = ({ row, headers }) => {
  const options = ['date', 'status', 'actions'];

  const dateCell = row
    .getVisibleCells()
    .find((cell) => cell.column.id === 'date');

  const statusCell = row
    .getVisibleCells()
    .find((cell) => cell.column.id === 'status');

  const actionsCell = row
    .getVisibleCells()
    .find((cell) => cell.column.id === 'actions');

  return (
    <div
      style={{
        boxShadow: '3px 4px 16.9px 0px #0000000D',
      }}
      className={cn(
        'p-5 relative rounded-xl transition hover:bg-blueLight',
        {
          'bg-blueLinerGradient shadow-md':
            row?.original?.status === 'available',
        }
      )}
    >
      <div
        className={cn(
          'space-y-5 pb-5 border-b-2 border-grayMedium/50',
          {
            'border-white/30':
              row?.original?.status === 'available',
          }
        )}
      >
        {row.getVisibleCells().map(
          (cell) =>
            !options.includes(cell.column.id) && (
              <div
                key={cell.id}
                className='grid grid-cols-12 gap-5'
              >
                <span className='text-xs col-span-4'>
                  {flexRender(
                    cell.column.columnDef.header,
                    headers
                      .find(
                        (header) =>
                          header.column.id ===
                          cell.column.id
                      )
                      .getContext()
                  )}
                </span>
                <span className='text-xs font-bold col-span-5'>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </span>
                <span className='col-span-3' />
              </div>
            )
        )}
      </div>

      <div className='grid grid-cols-3 place-items-center font-medium pt-5'>
        {flexRender(
          dateCell.column.columnDef.cell,
          dateCell.getContext()
        )}

        <div className='w-full'>
          {flexRender(
            statusCell.column.columnDef.cell,
            statusCell.getContext()
          )}
        </div>
      </div>

      <div className='absolute top-2 end-3'>
        {flexRender(
          actionsCell.column.columnDef.cell,
          actionsCell.getContext()
        )}
      </div>
    </div>
  );
};
