import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { staff } from '@/api/admin';

export const initialQueryKey = 'admin.staff.team';

export const getGroupMembers = async (ownerId) =>
  (await apiAdmin.get(staff.groupMemberList(ownerId))).data;

export const prefetchGroupMembers = async ({ ownerId }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, ownerId],
    queryFn: () => getGroupMembers(ownerId),
  });

  return queryClient;
};

export const useGroupMembers = ({ ownerId }) => {
  return useQuery({
    queryKey: [initialQueryKey, ownerId],
    queryFn: () => getGroupMembers(ownerId),
  });
};

export const useAddGroupMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        staff.actions.addGroupMember,
        data
      );
      return response.data;
    },
    onSuccess: (_, { ownerId }) => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, ownerId],
      });
    },
  });
};

export const useDeleteGroupMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ ownerId, memberId }) => {
      const response = await apiAdmin.delete(
        staff.actions.deleteGroupMember(ownerId, memberId)
      );
      return response.data;
    },
    onSuccess: (_, { ownerId }) => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, ownerId],
      });
    },
  });
};
