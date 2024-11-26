'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

const queryKey = 'admin.main-data.analysis';

//getAll
export const GetMedicalTests = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.MedicalTests.url
      );
      return response;
    },
  });
};

//getID
export const GetMedicalTestsID = (id) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.MedicalTests.getByID(id),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//delete
export const DeleteMedicalTests = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.MedicalTests.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
  });
};

//post
export const useCreateMedicalTests = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.MedicalTests.url,
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
export const useEditMedicalTests = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.MedicalTests.getByID(id),
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
