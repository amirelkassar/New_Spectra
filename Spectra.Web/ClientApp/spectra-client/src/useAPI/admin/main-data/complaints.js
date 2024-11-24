'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

const queryKey = 'admin.main-data.complaints';

//getAll
export const GetComplaint = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.complaint.list()
      );
      return response;
    },
  });
};

//getID
export const GetComplaintID = (id) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.complaint.actions.get(id)
      );
      return response;
    },
  });
};

//delete
export const DeleteComplaint = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.complaint.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
  });
};

//post
export const useCreateComplaint = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.complaint.actions.add,
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
export const useEditComplaint = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.complaint.actions.update(id),
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
