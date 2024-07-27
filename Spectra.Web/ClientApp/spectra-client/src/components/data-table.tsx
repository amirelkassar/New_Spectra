'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Table } from '@mantine/core';
import { Fragment, useState } from 'react';

import FilterIcon from '@/assets/icons/filter';
import CalenderIcon from '@/assets/icons/calender';
import { DoctorIconGreen } from '@/assets/icons/doctor';
import SessionIcon from '@/assets/icons/session';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const options = [
  {
    name: 'الكل',
    icon: <CalenderIcon className='size-5' />,
    value: undefined,
  },
  {
    name: 'كشف',
    icon: <DoctorIconGreen />,
    value: 'appointment',
  },
  {
    name: 'جلسة',
    icon: <SessionIcon />,
    value: 'session',
  },
];

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const getFillterValue = () => table.getColumn('type')?.getFilterValue();

  return (
    <div className=''>
      <div className='flex mdl:items-center flex-col mdl:flex-row gap-4 my-5'>
        <div className='flex items-center gap-3'>
          <FilterIcon />
          <span className='font-bold text-xs lg:text-base text-black'>
            فلتر بالنوع
          </span>
        </div>

        <div className='flex items-center gap-3'>
          {options.map((option, index) => (
            <Fragment key={option.name}>
              <Button
                key={option.name}
                onClick={() =>
                  table.getColumn('type')?.setFilterValue(option.value)
                }
                variant='blueLight'
                className={cn('font-normal', {
                  'bg-white': option.value !== getFillterValue(),
                })}
              >
                {option.icon}
                {option.name}
              </Button>
              {index !== options.length - 1 && (
                <span className='w-[1px] h-6 bg-grayMedium mx-1' />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Table withRowBorders={false}>
        <Table.Thead className='bg-blueLight'>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Th
                    key={header.id}
                    className='max-w-20 text-black text-xs font-normal lg:text-base'
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.Th>
                );
              })}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Tr
                className=' text-black text-xs lg:text-base'
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Td
                    className='py-3 first:font-bold first:lg:text-medium'
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={columns.length} className='h-24 text-center'>
                No results.
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}
