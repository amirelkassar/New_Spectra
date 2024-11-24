'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

//getAll
export const GetInternalExamination = () => {
  return useQuery({
    queryKey: [mainData.InternalExamination.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.InternalExamination.url,
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
    queryKey: [mainData.InternalExamination.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.InternalExamination.getByID(id),
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
        mainData.InternalExamination.DeleteByID(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.InternalExamination.url,
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
        mainData.InternalExamination.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.InternalExamination.url,
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
        mainData.InternalExamination.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.InternalExamination.url,
      ]);
    },
    onError: () => {},
  });
};
