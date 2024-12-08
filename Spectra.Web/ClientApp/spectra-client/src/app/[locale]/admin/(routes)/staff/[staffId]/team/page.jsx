import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Card from '@/components/card';
import { Team } from './_components/team';
import { prefetchGroupMembers } from '@/hooks/queries/admin/staff/team';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { AddTeamModal } from './_components/add-team-modal';

const TeamPage = async ({ params }) => {
  const staffId = params?.staffId;

  const queryClient = await prefetchGroupMembers({
    ownerId: staffId,
  });

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-5'>
        <SectionTitle>الفريق الطبي</SectionTitle>
        <AddTeamModal />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Team ownerId={staffId} />
      </HydrationBoundary>
    </Card>
  );
};

export default TeamPage;
