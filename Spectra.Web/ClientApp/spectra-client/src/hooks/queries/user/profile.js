import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';

export const initialQueryKey = 'user.profile-management';

export const getProfile = async () =>
  (await apiUser.get(profile.get)).data;

export const prefetchProfile = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getProfile,
  });

  return queryClient;
};

export const useProfile = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getProfile,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiUser.put(
        profile.actions.update,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useUpdateEmployeeProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiUser.put(profile.actions.updateEmployee, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useAddProfileAttachment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiUser.post(profile.actions.addAttachment, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};

export const useDeleteProfileAttachment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiUser.delete(profile.actions.deleteAttachment(id)))
        .data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};
