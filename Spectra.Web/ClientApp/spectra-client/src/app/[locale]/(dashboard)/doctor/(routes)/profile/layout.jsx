import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { prefetchProfile } from '@/hooks/queries/user/profile';
import { ProfileMainInfo } from './_components/profile-main-info';
import { ProfileAside } from './_components/profile-aside';

export default async function ProfileLayout({ children }) {
  const queryClient = await prefetchProfile();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='flex flex-col lg:flex-row gap-5 h-full'>
        <ProfileAside />

        <div className='flex-1 flex flex-col gap-5'>
          <ProfileMainInfo />
          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
