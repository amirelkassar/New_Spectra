'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';

//getAll
export const GetSection = () => {
  return useQuery({
    queryKey: [mainData.Section.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.Section.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetSectionID = (id) => {
  return useQuery({
    queryKey: [mainData.Section.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.Section.getByID(id),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//delete
export const DeleteSection = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.Section.getByID(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([mainData.Section.url]);
    },
  });
};

//post
export const useCreateSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.Section.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([mainData.Section.url]);
    },
    onError: () => {},
  });
};

//put
export const useEditSection = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.Section.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([mainData.Section.url]);
    },
    onError: () => {},
  });
};

//getAllDoctors
export const GetSectionDoctors = () => {
  return useQuery({
    queryKey: [mainData.Section.getAllDoctors],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.Section.getAllDoctors,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};
