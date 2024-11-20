'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetDiagnostics = () => {
  return useQuery({
    queryKey: [Admin.Diagnose.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Diagnose.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetDiagnosticsID = (id) => {
  return useQuery({
    queryKey: [Admin.Diagnose.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Diagnose.getByID(id),
        {
          headers: {},
        }
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
        Admin.Diagnose.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Diagnose.url]);
    },
  });
};

//post
export const useCreateDiagnostics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Diagnose.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Diagnose.url]);
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
        Admin.Diagnose.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Diagnose.url]);
    },
    onError: () => {},
  });
};
