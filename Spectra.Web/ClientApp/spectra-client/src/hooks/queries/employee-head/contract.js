import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiEmployeeHead } from '@/api/axios';
import { contract } from '@/api/employee-head';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

export const initialQueryKey = 'employee-head.contract';

const customQueries = {
  skipCount: 0,
  maxCount: 10,
};

const initialQueries = customQueries || initialSiteQueries;

export const getEmployeeHeadContractList = async (queries) =>
  (await apiEmployeeHead.get(contract.list(queries))).data;

export const prefetchEmployeeHeadContracts = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getEmployeeHeadContractList(initialQueries),
  });

  return queryClient;
};

export const useEmployeeHeadContracts = (
  params = {
    pageNum: null,
    search: '',
    state: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getEmployeeHeadContractList(queries),
    placeholderData: keepPreviousData,
  });
};

export const useEmployeeHeadContractById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiEmployeeHead.get(contract.actions.get(id))).data,
    placeholderData: keepPreviousData,
  });
};

export const useEmployeeHeadRejectContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployeeHead.post(contract.actions.reject, data))
        .data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useEmployeeHeadAcceptContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiEmployeeHead.post(contract.actions.accept, data))
        .data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};
