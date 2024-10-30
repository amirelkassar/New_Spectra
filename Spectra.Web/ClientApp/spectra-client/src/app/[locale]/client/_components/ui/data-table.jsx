'use client';

import { createContext, useContext } from 'react';
import {
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const DataTableContext = createContext(null);

export function DataTable({
  columns = [],
  data = [],
  children,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataTableContext.Provider
      value={{ table, columns, data }}
    >
      {children}
    </DataTableContext.Provider>
  );
}

export const useTable = () => {
  return useContext(DataTableContext);
};
