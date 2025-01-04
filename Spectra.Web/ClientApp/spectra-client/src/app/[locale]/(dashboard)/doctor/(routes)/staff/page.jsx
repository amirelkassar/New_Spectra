import { StaffTable } from './_components/staff-table';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchEmployeeHeadEmployeeList } from '@/hooks/queries/employee-head/employee';

const TeamPage = async () => {
  const queryClinet = await prefetchEmployeeHeadEmployeeList();

  return (
    <HydrationBoundary state={dehydrate(queryClinet)}>
      <StaffTable />
    </HydrationBoundary>
  );
};

export default TeamPage;
