import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiEmployee } from '@/api/axios';
import { scheduleTime } from '@/api/employee';

export const initialQueryKey = 'employee.scheduleTime';

export const getSceduleTimeList = async () =>
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
    placeholderData: keepPreviousData,
  });
};

export const useUpateEmployeeContract = () => {
  return useMutation({
    mutationFn: async (data) =>
      await apiEmployee.put(contract.actions.update, data),
    onError: () => {},
  });
};

export const useAddEmployeeContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(contract.actions.add, data)).data,
    onSuccess: () => {
      queryClient.refetchQueries({
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
      queryClient.refetchQueries({
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
      queryClient.refetchQueries({
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
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useDownloadEmployeeContract = () => {
  return useMutation({
    mutationFn: async ({ filename }) => {
      const blob = (
        await apiEmployee.post(
          contract.actions.download,
          {},
          { responseType: 'blob' }
        )
      ).data;

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename || 'downloaded-file';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    },
  });
};
