'use client';

import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetInternalExamination = () => {
  return useQuery({
    queryKey: [Admin.InternalExamination.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.InternalExamination.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetInternalExaminationID = (id) => {
  return useQuery({
    queryKey: [Admin.InternalExamination.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.InternalExamination.getByID(id),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//delete
export const DeleteInternalExamination = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        Admin.InternalExamination.DeleteByID(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.InternalExamination.url,
      ]);
    },
  });
};

//post
export const useCreateInternalExamination = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.InternalExamination.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.InternalExamination.url,
      ]);
    },
    onError: () => {},
  });
};

//put
export const useEditInternalExamination = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        Admin.InternalExamination.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.InternalExamination.url,
      ]);
    },
    onError: () => {},
  });
};
