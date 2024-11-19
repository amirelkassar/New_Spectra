'use client';
import { apiAdmin } from '@/api/api';
import { Admin } from '@/api/endpoints';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetComplaint = () => {
  return useQuery({
    queryKey: [Admin.Complaint.url],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Complaint.url,
        {
          headers: {},
        }
      );
      return response;
    },
  });
};

//getID
export const GetComplaintID = (id) => {
  return useQuery({
    queryKey: [Admin.Complaint.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Complaint.getByID(id),
        {
          headers: {},
        }
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
        Admin.Complaint.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Complaint.url]);
    },
  });
};

//post
export const useCreateComplaint = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Complaint.url,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Complaint.url]);
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
        Admin.Complaint.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([Admin.Complaint.url]);
    },
    onError: () => {},
  });
};
