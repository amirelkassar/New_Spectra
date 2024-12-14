import { QueryClient, useQuery } from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';

export const initialQueryKey =
  'user.profile-management.employee-groups';

export const getProfileEmployeeGroups = async () =>
  (await apiUser.get(profile.employeeGroups)).data;

export const prefetchProfileEmployeeGroups = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getProfileEmployeeGroups,
  });

  return queryClient;
};

export const useProfileEmployeeGroups = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getProfileEmployeeGroups,
  });
};
