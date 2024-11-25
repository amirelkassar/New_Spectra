'use client';

import { useSearchParams } from 'next/navigation';

export const useQuery = ({ query = () => {} }) => {
  const searchParams = useSearchParams();

  const pageNum = searchParams.get('page') || 1;

  const search = searchParams.get('search') || '';

  const myQuery = query(pageNum, search);

  const {
    data,
    isPending,
    isPaused,
    isError,
    isPlaceholderData,
    isFetching,
  } = myQuery;

  const items = data?.data?.items || data?.data;
  const pageSize = data?.data?.pageSize;
  const totalCount = data?.data?.totalCount;
  const isSearching = !!search;
  const hasData = !!items?.length;

  const status = {
    isPending,
    isPaused,
    isError,
    isSearching,
    isPlaceholderData,
    isFetching,
    hasData,
  };

  return {
    ...myQuery,
    data: items,
    status,
    pageSize,
    totalCount,
    pageNumber: pageNum,
  };
};
