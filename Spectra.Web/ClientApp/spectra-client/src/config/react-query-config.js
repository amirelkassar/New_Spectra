"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: 1000 * 60 * 60,
      refetchIntervalInBackground: true,
      retry: 3,
    },
    mutations: {
      onError: (res) => console.log(res),
    },
  },
});

const ReactQueryConfig = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryConfig;
