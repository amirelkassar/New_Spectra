import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { contract } from '@/api/admin';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

export const initialQueryKey = 'admin.contract';

const customQueries = {
  skipCount: 0,
  maxCount: 10,
};

const initialQueries = customQueries || initialSiteQueries;

export const getAdminContractList = async (queries) =>
  (await apiAdmin.get(contract.list(queries))).data;

export const prefetchAdminContracts = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getAdminContractList(initialQueries),
  });

  return queryClient;
};

export const useAdminContracts = (
  params = {
    pageNum: null,
    search: '',
    state: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getAdminContractList(queries),
    placeholderData: keepPreviousData,
  });
};

export const useAdminContractById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiAdmin.get(contract.actions.get(id))).data,
    placeholderData: keepPreviousData,
  });
};

export const useAdminContractTerms = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id, 'terms'],
    queryFn: async () =>
      (await apiAdmin.get(contract.actions.getContractTerms(id)))
        .data,
    placeholderData: keepPreviousData,
  });
};

export const useAdminUpdateContract = () => {
  return useMutation({
    mutationFn: async (data) =>
      await apiAdmin.put(contract.actions.update, data),
    onError: () => {},
  });
};

export const useAdminDeleteContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (contractId) =>
      (await apiAdmin.delete(contract.actions.delete(contractId)))
        .data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useAdminCancelContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiAdmin.post(contract.actions.cancel, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useAdminRejectContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiAdmin.post(contract.actions.reject, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useAdminAcceptContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiAdmin.post(contract.actions.accept, data)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};
