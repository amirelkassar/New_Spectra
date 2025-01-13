import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Header } from './_components/header';
import { WorkScheduleList } from './_components/work-schedule-list';
import { prefetchScheduleTimeList } from '@/hooks/queries/employee/schedule-time';
import Card from '@/components/card';

const WorkSchedulePage = async () => {
  const queryClient = await prefetchScheduleTimeList();

  return (
    <Card className='h-full space-y-10'>
      <Header />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className='flex flex-col items-center lgl:justify-center lgl:items-stretch lgl:flex-row lgl:flex-wrap gap-4 *:shrink-0'>
          <WorkScheduleList />
        </div>
      </HydrationBoundary>
    </Card>
  );
};

export default WorkSchedulePage;
