import Card from '@/components/card';
import { Staff } from './_components/staff';
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
        <Staff />
      </HydrationBoundary>
    </Card>
  );
};

export default StaffPage;
