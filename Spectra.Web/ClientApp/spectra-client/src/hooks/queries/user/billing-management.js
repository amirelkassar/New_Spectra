import {
  QueryClient,
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { billingManagement } from '@/api/user';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

const customQueries = null;

export const initialQueries = customQueries || initialSiteQueries;

export const initialQueryKey = 'user.billingManagement.account';

export const getAccountList = async (queries) =>
  (await apiUser.get(billingManagement.accountList(queries))).data;

export const prefetchUserAccountList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getAccountList(initialQueries),
  });

  return queryClient;
};

export const useUserAccountList = (
  params = {
    pageNum: null,
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getAccountList(queries),
    placeholderData: keepPreviousData,
  });
};

export const useUserAccountById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiUser.get(billingManagement.actions.get(id))).data,
  });
};

const walletQueryKey = 'user.billingManagement.wallet';

export const getUserWallet = async () =>
  (await apiUser.get(billingManagement.wallet)).data;

export const prefetchUserWallet = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [walletQueryKey],
    queryFn: getUserWallet,
  });

  return queryClient;
};

export const useUserWallet = () => {
  return useQuery({
    queryKey: [walletQueryKey],
    queryFn: getUserWallet,
    placeholderData: keepPreviousData,
  });
};

export const useUserAddAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiUser.post(billingManagement.actions.add, data)).data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
  });
};

export const useUserUpdateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      (await apiUser.put(billingManagement.actions.update, data))
        .data,
    onSuccess: (_, data) => {
      const id = data?.id || '';

      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, id],
      });

      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
  });
};

export const useUserDeleteAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiUser.delete(billingManagement.actions.delete(id)))
        .data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
  });
};
