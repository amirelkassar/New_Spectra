'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetSpecialization = () => {
  return useQuery({
    queryKey: [Admin.Specialization.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Specialization.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetSpecializationID = (id) => {
  return useQuery({
    queryKey: [Admin.Specialization.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Specialization.getByID(id),
        {
          headers: {},
        }
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
        Admin.Specialization.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.Specialization.url,
      ]);
    },
  });
};

//post
export const useCreateSpecialization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Specialization.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.Specialization.url,
      ]);
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
        Admin.Specialization.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.Specialization.url,
      ]);
    },
    onError: () => {},
  });
};
