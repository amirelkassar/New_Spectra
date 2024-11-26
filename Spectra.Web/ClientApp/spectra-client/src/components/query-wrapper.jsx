'use client';

import NoDataYet from './noDataYet';
import Loader from './loader';

import { ServerError } from './server-error';
import { NoInternet } from './no-internet';
import { NoSearchResults } from './no-search-results';
import { NotFound404 } from './not-found-404';

export const QueryWrapper = ({
  status = {
    errorCode: null,
    isPending: false,
    isPaused: false,
    isError: false,
    isSearching: false,
    hasData: false,
  },
  refetch = () => {},
  children,
}) => {
  if (status.isPending) return <Loader />;

  if (status.isError && status?.errorCode === 404)
    return <NotFound404 />;

  if (status.isError)
    return <ServerError onRetry={refetch} />;

  if (status.isPaused)
    return <NoInternet onRetry={refetch} />;

  if (status.isSearching && !status.hasData)
    return <NoSearchResults />;

  if (!status.hasData) return <NoDataYet />;

  return <>{children}</>;
};
