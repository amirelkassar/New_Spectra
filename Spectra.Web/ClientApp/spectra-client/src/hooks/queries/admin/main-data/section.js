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
  skipCount: 0,
  maxCount: 5,
};

export const initialQueryKey = 'admin.main-data.sections';

export const getSections = async (queries) =>
  (await apiAdmin.get(mainData.section.list(queries))).data;

export const prefetchSections = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getSections(initialQueries),
  });

  return queryClient;
};

//getAll
export const useSections = (
  params = {
    pageNum: null,
    search: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getSections(queries),
    placeholderData: keepPreviousData,
  });
};

//getID
export const GetSectionID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.section.actions.get(id)
      );
      return response.data;
    },
  });
};

//delete
export const DeleteSection = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.section.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
  });
};

//post
export const useCreateSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.section.actions.add,
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
export const useEditSection = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.section.actions.update(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([initialQueryKey, id]);
    },
    onError: () => {},
  });
};
