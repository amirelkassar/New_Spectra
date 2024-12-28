import { prefetchProfileEmployeeGroups } from '@/hooks/queries/user/employee-groups';
import { TeamTable } from './_components/team-table';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const TeamPage = async () => {
  const queryClinet = await prefetchProfileEmployeeGroups();

  return (
    <HydrationBoundary state={dehydrate(queryClinet)}>
      <TeamTable />
    </HydrationBoundary>
  );
};

export default TeamPage;
