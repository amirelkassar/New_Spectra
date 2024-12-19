'use client';

import { memo, useCallback, useMemo } from 'react';

import NoDataYet from './noDataYet';
import Loader from './loader';
import { ServerError } from './server-error';
import { NoInternet } from './no-internet';
import { NoSearchResults } from './no-search-results';
import { NotFound404 } from './not-found-404';
import { Forbidden403 } from './forbidden-403';

const MemowizedLoader = memo(Loader);
const MemowizedNotFound404 = memo(NotFound404);
const MemowizedForbiden403 = memo(Forbidden403);
const MemowizedServerError = memo(ServerError);
const MemowizedNoInternet = memo(NoInternet);
const MemowizedNoSearchResults = memo(NoSearchResults);
const MemowizedNoDataYet = memo(NoDataYet);

/**
 * @param {Object} props
 * @param {Object} props.query - The query object from the server.
 * @param {boolean} [props.isSearching] - Whether the query is in search mode.
 * @param {boolean} [props.isFiltered] - Whether the query is currently filtering data.
 * @param {boolean} [props.showLoaderOnFetching] - Whether the query is currently fetching data.
 * @param {(args: { data: any; pageSize?: number; totalCount?: number; isPlaceholderData?: boolean; hasData?: boolean; }) => React.ReactNode} props.children - A render function to render the children with provided props.
 */

export const QueryWrapper = ({
  query,
  isSearching = false,
  isFiltered = false,
  showLoaderOnFetching = false,
  children,
}) => {
  if (!query) throw new Error('No query props provided');

  const items = query?.data?.data?.items || query?.data?.data;
  const pageSize = query?.data?.data?.pageSize;
  const totalCount = query?.data?.data?.totalCount;
  const hasData = useMemo(() => {
    if (Array.isArray(items)) {
      return items.length > 0;
    }
    if (typeof items === 'object' && items !== null) {
      return Object.keys(items).length > 0; // تحقق إذا كان الكائن يحتوي على مفاتيح
    }
    return false; // إذا كانت ليست مصفوفة ولا كائنًا
  }, [items]);

  const onRetry = useCallback(() => query?.refetch(), [query]);

  if (query?.isPending || (query?.isFetching && showLoaderOnFetching))
    return <MemowizedLoader />;

  if (query?.isError && query?.failureReason?.status === 404)
    return <MemowizedNotFound404 />;

  if (query?.isError && query?.failureReason?.status === 403)
    return <MemowizedForbiden403 />;

  if (query?.isError)
    return <MemowizedServerError onRetry={onRetry} />;

  if (query?.isPaused)
    return <MemowizedNoInternet onRetry={onRetry} />;

  if (isSearching && !hasData) return <MemowizedNoSearchResults />;

  if (!hasData && !isFiltered) return <MemowizedNoDataYet />;

  if (children)
    return children({
      data: items,
      pageSize,
      totalCount,
      hasData,
      isPlaceholderData: query?.isPlaceholderData,
    });
};
