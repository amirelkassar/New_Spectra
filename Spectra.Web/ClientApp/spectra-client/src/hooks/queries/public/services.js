import { QueryClient, useQuery } from '@tanstack/react-query';

import { apiPublic } from '@/api/axios';
import { services } from '@/api/public';

export const initialQueryKey = 'public.services';

export const getPublicServices = async () =>
  (await apiPublic.get(services.listDisplay())).data;

export const prefetchPublicServices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getPublicServices,
  });

  return queryClient;
};

export const usePublicServices = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getPublicServices,
  });
};

export const usePublicServicesById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiPublic.get(services.actions.get(id))).data,
  });
};
