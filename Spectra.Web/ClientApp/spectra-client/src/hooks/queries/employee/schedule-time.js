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

export const getScheduleTimeList = async () =>
  (await apiEmployee.get(scheduleTime.list())).data;

export const prefetchScheduleTimeList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getScheduleTimeList,
  });

  return queryClient;
};

export const useScheduleTimeList = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getScheduleTimeList,
    placeholderData: keepPreviousData,
  });
};

export const useAddScheduleTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.post(scheduleTime.actions.add, data)).data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};

export const useUpdateScheduleTime = () => {
  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployee.put(scheduleTime.actions.update, data)).data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};

export const useDeleteScheduleTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiEmployee.delete(scheduleTime.actions.delete(id)))
        .data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};
