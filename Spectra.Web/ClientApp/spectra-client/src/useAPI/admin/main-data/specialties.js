'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

const queryKey = 'admin.main-data.specialization';

//getAll
export const GetSpecialization = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.specialization.list()
      );
      return response;
    },
  });
};

//getID
export const GetSpecializationID = (id) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.specialization.actions.get(id)
      );
      return response;
    },
  });
};

//delete
export const DeleteSpecialization = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.specialization.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
  });
};

//post
export const useCreateSpecialization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.specialization.actions.add,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
    onError: () => {},
  });
};

//put
export const useEditSpecialization = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.specialization.actions.update(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
    onError: () => {},
  });
};
