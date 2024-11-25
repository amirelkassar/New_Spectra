'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

//getAll
export const GetMasterDataServices = () => {
  return useQuery({
    queryKey: [mainData.MasterDataServices.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.MasterDataServices.url,
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
    queryKey: [mainData.MasterDataServices.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.MasterDataServices.getByID(id),
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
        mainData.MasterDataServices.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.MasterDataServices.url,
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
        mainData.MasterDataServices.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.MasterDataServices.url,
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
        mainData.MasterDataServices.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        mainData.MasterDataServices.url,
      ]);
    },
    onError: () => {},
  });
};
