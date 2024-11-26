import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';
import { getQueries } from '@/lib/utils';

export const initialQueries = {
  search: '',
  skipCount: 0,
  maxCount: 5,
};

export const initialQueryKey = 'admin.main-data.complaints';

export const getComplaints = async (queries) =>
  (await apiAdmin.get(mainData.complaint.list(queries)))
    .data;

export const prefetchComplaints = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getComplaints(initialQueries),
  });

  return queryClient;
};

//getAll
export const useComplaints = (pageNum = 1, search = '') => {
  const queries = getQueries(
    pageNum,
    search,
    initialQueries
  );

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getComplaints(queries),
    placeholderData: keepPreviousData,
  });
};

//getID
export const GetComplaintID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
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
      queryClient.refetchQueries([initialQueryKey]);
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
      queryClient.refetchQueries([initialQueryKey]);
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
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};
