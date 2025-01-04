import {
  keepPreviousData,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

import { apiEmployeeHead } from '@/api/axios';
import { employee } from '@/api/employee-head';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

export const initialQueryKey = 'employee-head.employee';

const customQueries = null;

const initialQueries = customQueries || initialSiteQueries;

export const getEmployeeHeadEmployeeList = async (queries) =>
  (await apiEmployeeHead.get(employee.list(queries))).data;

export const prefetchEmployeeHeadEmployeeList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getEmployeeHeadEmployeeList(initialQueries),
  });

  return queryClient;
};

export const useEmployeeHeadEmployeeList = (
  params = {
    pageNum: null,
    search: '',
    jobType: '',
    mainSpecializationId: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getEmployeeHeadEmployeeList(queries),
    placeholderData: keepPreviousData,
  });
};

export const useEmployeeHeadEmployeeById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiEmployeeHead.get(employee.actions.get(id))).data,
  });
};
