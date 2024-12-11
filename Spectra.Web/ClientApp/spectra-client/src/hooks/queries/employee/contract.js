import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiEmployee } from '@/api/axios';
import { contract } from '@/api/employee';

export const initialQueryKey = 'employee.contract';

export const getEmployeeContract = async () =>
  (await apiEmployee.get(contract.get)).data;

export const prefetchEmployeeContract = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getEmployeeContract,
  });

  return queryClient;
};

export const useEmployeeContract = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getEmployeeContract,
  });
};

export const useUpateEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      await apiEmployee.put(contract.actions.update, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useAddEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(contract.actions.add, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useCancelEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(contract.actions.cancel, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useRejectEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(contract.actions.reject, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useAcceptEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(contract.actions.accept, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};
