'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

const queryKey = 'admin.main-data.drugs';

export const GetDrugs = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Drugs.list()
      );

      return response;
    },
  });
};

export const GetDrugsID = (id) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Drugs.actions.get(id),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

export const DeleteDrugs = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        Admin.Drugs.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
  });
};

export const useCreateDrug = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Drugs.actions.add,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
    onError: () => {},
  });
};

export const useEditDrug = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        Admin.Drugs.actions.update(id),
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
    onError: () => {},
  });
};
