import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Team } from './_components/team';
import { prefetchGroupMembers } from '@/hooks/queries/admin/staff/team';

const TeamPage = async ({ params }) => {
  const staffId = params?.staffId;

  const queryClient = await prefetchGroupMembers({
    ownerId: staffId,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Team ownerId={staffId} />
    </HydrationBoundary>
  );
};

export default TeamPage;
