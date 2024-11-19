'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetMasterDataServices = () => {
  return useQuery({
    queryKey: [Admin.MasterDataServices.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.MasterDataServices.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetMasterDataServicesID = (id) => {
  return useQuery({
    queryKey: [Admin.MasterDataServices.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.MasterDataServices.getByID(id),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//delete
export const DeleteMasterDataServices = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        Admin.MasterDataServices.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.MasterDataServices.url,
      ]);
    },
  });
};

//post
export const useCreateMasterDataServices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.MasterDataServices.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.MasterDataServices.url,
      ]);
    },
    onError: () => {},
  });
};

//put
export const useEditMasterDataServices = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        Admin.MasterDataServices.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        Admin.MasterDataServices.url,
      ]);
    },
    onError: () => {},
  });
};
