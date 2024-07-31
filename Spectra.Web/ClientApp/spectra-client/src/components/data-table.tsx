'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import { Select, Table } from '@mantine/core';
import { Pagination } from '@mantine/core';

import { Fragment, useState } from 'react';

import FilterIcon from '@/assets/icons/filter';
import Button from '@/components/button';
import { cn } from '@/lib/utils';
import ArrowLeft from '@/assets/icons/arrow-left';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import { SortingState } from '@tanstack/react-table';

export interface FilterData {
  label: string;
  icon: JSX.Element;
  key: string;
}

export interface SortingData {
  label: string;
  key: string;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  sort?: boolean;
  filter?: 'select' | 'buttons' | null;
  filterBy?: string;
  filterData?: FilterData[];
  sortingData?: SortingData[];
  selectData?: string[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  sort = false,
  filter = null,
  filterBy = '',
  filterData = [],
  sortingData = [],
  selectData = [],
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    state: {
      columnFilters,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const getFillterValue = () => {
    const tableColumn = table.getColumn(filterBy);

    if (tableColumn) return tableColumn.getFilterValue();
  };

  return (
    <div className='space-y-5'>
      {/* Filter */}
      {filter && (
        <div className='flex mdl:items-center flex-col mdl:flex-row gap-4 my-5 w-full'>
          {filter === 'select' && (
            <div>
              <Select
                searchable
                classNames={{
                  input:
                    'focus:border-greenMain border-black placeholder:text-black placeholder:text-xs disabled:border-black/10 disabled:text-black/50 disabled:placeholder:text-black/50 rounded-lg',
                }}
                checkIconPosition='right'
                data={selectData}
                disabled={selectData?.length === 0}
                placeholder='اختر التخصص'
                value={
                  (table.getColumn(filterBy)?.getFilterValue() as string) ?? ''
                }
                onChange={(value) =>
                  table.getColumn(filterBy)?.setFilterValue(value)
                }
                rightSection={
                  <ArrowDownBlack
                    className={selectData?.length === 0 ? 'opacity-10' : ''}
                  />
                }
              />
            </div>
          )}

          <div className='flex items-center gap-3'>
            <FilterIcon />
            <span className='font-bold text-xs lg:text-base text-black'>
              فلتر
            </span>
          </div>

          {filter === 'buttons' && (
            <div className='flex items-center w-full mdl:w-auto gap-1 mdl:gap-3 mdl:pb-0 pb-2 overflow-x-auto'>
              <Button
                onClick={() =>
                  table.getColumn(filterBy)?.setFilterValue(undefined)
                }
                variant='blueLight'
                className={cn(
                  'font-normal flex-1 mdl:flex-initial gap-3 mdl:gap-5',
                  {
                    'bg-white': getFillterValue() !== undefined,
                  }
                )}
              >
                الكل
              </Button>

              <span className='w-[1px] h-6 bg-grayMedium mx-1' />

              {filterData.map((option, index) => (
                <Fragment key={option.label}>
                  <Button
                    key={option.label}
                    onClick={() =>
                      table.getColumn(filterBy)?.setFilterValue(option.key)
                    }
                    variant='blueLight'
                    className={cn(
                      'font-normal flex-1 mdl:flex-initial gap-3 mdl:gap-5',
                      {
                        'bg-white': option.key !== getFillterValue(),
                      }
                    )}
                  >
                    {option.icon}
                    {option.label}
                  </Button>
                  {index !== filterData.length - 1 && (
                    <span className='w-[1px] h-6 bg-grayMedium mx-1' />
                  )}
                </Fragment>
              ))}
            </div>
          )}

          {sort && (
            <div className='flex items-center w-full mdl:w-auto gap-1 mdl:gap-3 mdl:pb-0 pb-2 overflow-x-auto'>
              <Button
                onClick={() => table.resetSorting()}
                variant='blueLight'
                className={cn(
                  'font-normal flex-1 mdl:flex-initial gap-3 mdl:gap-5',
                  {
                    'bg-white': table
                      .getAllColumns()
                      .some((column) => column.getIsSorted()),
                  }
                )}
              >
                الكل
              </Button>

              <span className='w-[1px] h-6 bg-grayMedium mx-1' />

              {sortingData.map((option, index) => (
                <Fragment key={option.label}>
                  <Button
                    key={option.label}
                    onClick={() => table.getColumn(option.key)?.toggleSorting()}
                    variant='blueLight'
                    className={cn('font-normal flex-1 mdl:flex-initial gap-1', {
                      'bg-white': option.key !== getFillterValue(),
                    })}
                  >
                    {table.getColumn(option.key)?.getIsSorted() && (
                      <>
                        {table.getColumn(option.key)?.getIsSorted() ===
                          'asc' && (
                          <ArrowLeft
                            className='rotate-90 size-3'
                            fill='#10B0C1'
                          />
                        )}

                        {table.getColumn(option.key)?.getIsSorted() ===
                          'desc' && (
                          <ArrowLeft
                            className='-rotate-90 size-3'
                            fill='#10B0C1'
                          />
                        )}
                      </>
                    )}

                    {option.label}
                  </Button>
                  {index !== sortingData.length - 1 && (
                    <span className='w-[1px] h-6 bg-grayMedium mx-1' />
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Table */}
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

      {/* Pagination */}
      {data.length > 10 && (
        <div className='font-bold flex items-center justify-between'>
          <Button
            className='py-1.5 px-3 lg:px-6 gap-2 text-xs lg:text-base lg:gap-4 rounded-lg'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowLeft className='rotate-180' />
            التالي
          </Button>

          <Pagination
            total={table.getPageCount()}
            dir='ltr'
            classNames={{
              control: '!bg-white hover:!bg-black/5 !transition',
            }}
            size='sm'
            radius='xl'
            withControls={false}
            value={table.getState().pagination.pageIndex + 1}
            onChange={(value) => table.setPageIndex(value - 1)}
          />

          <Button
            className='py-1.5 text-xs lg:text-base px-3 lg:px-6 gap-2 lg:gap-4 rounded-lg'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeft />
            السابق
          </Button>
        </div>
      )}
    </div>
  );
}