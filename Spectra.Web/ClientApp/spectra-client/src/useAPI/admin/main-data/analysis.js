'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetMedicalTests = () => {
  return useQuery({
    queryKey: [Admin.MedicalTests.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.MedicalTests.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetMedicalTestsID = (id) => {
  return useQuery({
    queryKey: [Admin.MedicalTests.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.MedicalTests.getByID(id),
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
        Admin.MedicalTests.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.MedicalTests.url]);
    },
  });
};

//post
export const useCreateMedicalTests = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.MedicalTests.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.MedicalTests.url]);
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
        Admin.MedicalTests.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.MedicalTests.url]);
    },
    onError: () => {},
  });
};
