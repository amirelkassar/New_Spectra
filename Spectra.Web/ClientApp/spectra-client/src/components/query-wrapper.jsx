'use client';

import NoDataYet from './noDataYet';
import Loader from './loader';

import { ServerError } from './server-error';
import { NoInternet } from './no-internet';
import { NoSearchResults } from './no-search-results';

export const QueryWrapper = ({
  status = {
    isPending: false,
    isPaused: false,
    isError: false,
    isSearching: false,
    isPlaceholderData: false,
    hasData: false,
  },
  refetch = () => {},
  children,
}) => {
  if (status.isPending) return <Loader />;

  if (status.isError)
    return <ServerError onRetry={refetch} />;

  if (status.isPaused)
    return <NoInternet onRetry={refetch} />;

  if (status.isSearching && !status.hasData)
    return <NoSearchResults />;

  if (!status.hasData) return <NoDataYet />;

  // if (status.isPlaceholderData)

  return <>{children}</>;
};
