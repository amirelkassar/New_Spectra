'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetSection = () => {
  return useQuery({
    queryKey: [Admin.Section.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Section.url,
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
    queryKey: [Admin.Section.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Section.getByID(id),
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
        Admin.Section.getByID(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([Admin.Section.url]);
    },
  });
};

//post
export const useCreateSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Section.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Section.url]);
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
        Admin.Section.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Section.url]);
    },
    onError: () => {},
  });
};

//getAllDoctors
export const GetSectionDoctors = () => {
  return useQuery({
    queryKey: [Admin.Section.getAllDoctors],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Section.getAllDoctors,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};
