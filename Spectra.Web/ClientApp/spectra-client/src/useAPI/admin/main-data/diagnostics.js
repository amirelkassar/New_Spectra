'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

const queryKey = 'admin.main-data.diagnostics';

//getAll
export const GetDiagnostics = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.diagnose.list()
      );
      return response;
    },
  });
};

//getID
export const GetDiagnosticsID = (id) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.diagnose.actions.get(id)
      );
      return response;
    },
  });
};

//delete
export const DeleteDiagnostics = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.diagnose.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
  });
};

//post
export const useCreateDiagnostics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.diagnose.actions.add,
        data
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
export const useEditDiagnostics = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.diagnose.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([queryKey]);
    },
    onError: () => {},
  });
};
