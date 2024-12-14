'use client';

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        // refetchOnReconnect: false,
        // refetchInterval: 10000,
        // refetchIntervalInBackground: true,
        staleTime: 10000,
        retry: (failureCount, error) => {
          const status = error.response?.status;

          const nonRetryableErrors = [400, 401, 403, 404, 422];

          if (nonRetryableErrors.includes(status)) {
            return false;
          }

          return failureCount < 3;
        },
      },
    },
  });
}

let browserQueryClient = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const QueryProvider = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
