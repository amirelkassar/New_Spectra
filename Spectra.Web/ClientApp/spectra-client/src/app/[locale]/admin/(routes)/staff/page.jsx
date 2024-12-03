import Card from '@/components/card';
import { StaffTable } from './_components/staff-table';
import { prefetchStaff } from '@/hooks/queries/admin/staff/staff';
import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

const StaffPage = async () => {
  const queryClient = await prefetchStaff();

  return (
    <Card className='h-full'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StaffTable />
      </HydrationBoundary>
    </Card>
  );
};

export default StaffPage;
