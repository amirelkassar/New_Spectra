import { QueryClient, useQuery } from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';

export const initialQueryKey =
  'user.profile-management.attachment-list';

export const getProfileAttachments = async () =>
  (await apiUser.get(profile.attachmentList)).data;

export const prefetchAttachments = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: getAttachments,
  });

  return queryClient;
};

export const useProfileAttachments = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: getAttachments,
  });
};
