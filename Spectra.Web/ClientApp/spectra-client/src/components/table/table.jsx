'use client';

import { flexRender } from '@tanstack/react-table';
import {
  Table as MantineTable,
  TableThead,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
} from '@mantine/core';

import { useTable } from '@/components/table/data-table';
import { cn } from '@/lib/utils';

export const Table = ({ children, ...props }) => {
  return <MantineTable {...props}>{children}</MantineTable>;
};

const TableHead = ({
  classNames = {
    tr: '',
    th: '',
  },
}) => {
  const { table } = useTable();
  return (
    <TableThead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableTr className={classNames.tr} key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableTh className={cn(classNames.th)} key={header.id}>
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
  );
};

Table.Head = TableHead;

const TableBody = ({
  classNames = {
    tr: '',
    td: '',
  },
  children,
}) => {
  const { table } = useTable();

  return (
    <TableTbody>
      {table.getRowModel().rows?.length
        ? table.getRowModel().rows.map((row) => (
            <TableTr
              id={`table-row-${row.id}`}
              data-status={row?.original?.status || 'none'}
              key={row.id}
              className={cn(
                'data-[selected=true]:bg-blueLight',
                classNames.tr
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <TableTd className={cn(classNames.td)} key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableTd>
              ))}
            </TableTr>
          ))
        : children}
    </TableTbody>
  );
};

Table.Body = TableBody;

const TableFallback = ({ children, ...props }) => {
  const { columns } = useTable();
  return (
    <TableTr>
      <TableTd
        colSpan={columns?.length}
        className='h-24 text-center'
        {...props}
      >
        {children}
      </TableTd>
    </TableTr>
  );
};

Table.Fallback = TableFallback;
