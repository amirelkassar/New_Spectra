'use client';

import { useSearchParams } from 'next/navigation';
import { QueryWrapper } from './query-wrapper';
import { useMemo } from 'react';
import { Pagination } from './table/pagination';

export const DataSuspense = ({
  query = () => {},
  searchable = false,
  paginable = false,
  children,
}) => {
  const searchParams = useSearchParams();

  const pageNum = searchParams.get('page') || 1;

  const search = searchParams.get('search') || '';

  const myQuery = useMemo(() => {
    if (searchable && paginable) {
      return query(pageNum, search);
    }

    if (searchable) {
      return query('*', search);
    }

    if (paginable) {
      return query(pageNum);
    }

    return query();
  }, [searchable, paginable, pageNum, search, query]);

  const {
    data,
    isPending,
    isPaused,
    isError,
    isPlaceholderData,
    failureReason,
  } = myQuery;

  const items = data?.data?.items || data?.data;
  const pageSize = data?.data?.pageSize;
  const totalCount = data?.data?.totalCount;
  const isSearching = !!search;
  const hasData = !!items?.length;
  const errorCode = failureReason?.status;

  return (
    <QueryWrapper
      status={{
        errorCode,
        hasData,
        isError,
        isPaused,
        isPending,
        isPlaceholderData,
        isSearching,
      }}
    >
      {children}

      {paginable && (
        <Pagination
          pageSize={pageSize}
          totalCount={totalCount}
          pageNumber={pageNum}
          disabled={isPlaceholderData}
        />
      )}
    </QueryWrapper>
  );
};
