import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { staff } from '@/api/admin';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';

const initailCustomQueries = null;

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'admin.staff';

export const getStaff = async (queries) =>
  (await apiAdmin.get(staff.list(queries))).data;

export const getMedicalProviders = async (queries) =>
  (await apiAdmin.get(staff.providerList(queries))).data;

export const prefetchStaff = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getStaff(initialQueries),
  });

  return queryClient;
};

export const prefetchMedicalProviders = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getMedicalProviders(initialQueries),
  });

  return queryClient;
};

export const useStaff = (
  params = { pageNum: null, search: '', jobType: '' }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getStaff(queries),
    placeholderData: keepPreviousData,
  });
};

export const useMedicalProviders = (
  params = { pageNum: null, search: '', jobType: '' }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getMedicalProviders(queries),
    placeholderData: keepPreviousData,
  });
};

export const useStaffById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(staff.actions.get(id));
      return response.data;
    },
  });
};

export const useDeleteStaff = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        staff.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === initialQueryKey &&
          query.queryKey[1] !== id,
      });
    },
  });
};

export const useAddStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(staff.actions.add, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
    onError: () => {},
  });
};

export const useUpdateStaff = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        staff.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useUpdateMedicalData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        staff.actions.updateMedicalData(data?.id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useAddAttachment = (empId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        staff.actions.addAttachment,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, empId],
      });
    },
    onError: () => {},
  });
};

export const useDeleteAttachment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ fileId, employeeId }) => {
      const response = await apiAdmin.delete(
        staff.actions.deleteAttachment(fileId, employeeId)
      );
      return response.data;
    },
    onSuccess: (_, { employeeId }) => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, employeeId],
      });
    },
    onError: () => {},
  });
};

export const useUpdateAttachment = (fileId, employeeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        staff.actions.updateAttachment(fileId),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, employeeId],
      });
    },
  });
};
