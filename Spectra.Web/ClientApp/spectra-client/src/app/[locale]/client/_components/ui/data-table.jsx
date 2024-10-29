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

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table
      className='border-separate border-spacing-y-5 -mt-5'
      withRowBorders={false}
    >
      <TableThead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableTr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableTh
                  className='bg-blueLight first:rounded-s-2xl last:rounded-e-2xl text-xs mdl:text-base font-normal p-3 text-center'
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
              className='group relative after:absolute after:w-full after:h-full after:bg-transparent after:rounded-2xl after:start-0 after:top-0 w-full'
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableTd
                  className={cn(
                    'first:rounded-s-2xl last:rounded-e-2xl transition group-hover:bg-blueLight text-xs mdl:text-base first:font-bold first:mdl:text-xl first:ps-5 py-7 px-3 relative z-10'
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
              colSpan={columns.length}
              className='h-24 text-center'
            >
              No results.
            </TableTd>
          </TableTr>
        )}
      </TableTbody>
    </Table>
  );
}
