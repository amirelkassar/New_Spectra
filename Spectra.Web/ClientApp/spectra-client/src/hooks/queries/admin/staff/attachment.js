import { useMutation, useQueryClient } from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { staff } from '@/api/admin';

export const initialQueryKey = 'admin.staff';

export const useAddAttachment = (empId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        staff.actions.addAttachment,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, empId],
      });
    },
    onError: () => {},
  });
};

export const useDeleteAttachment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ fileId, employeeId }) => {
      const response = await apiAdmin.delete(
        staff.actions.deleteAttachment(fileId, employeeId)
      );
      return response.data;
    },
    onSuccess: (_, { employeeId }) => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, employeeId],
      });
    },
    onError: () => {},
  });
};

export const useUpdateAttachment = (fileId, employeeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        staff.actions.updateAttachment(fileId),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, employeeId],
      });
    },
  });
};
