import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { MOBILE_APP } from '@/data';
import { MobileApp } from '@/guest/_components/sections';
import { DoctorInfo } from './_components/doctor-info';
import { DoctorReviews } from './_components/doctor-reviews';
import { prefetchPublicMedicalProvidersById } from '@/hooks/queries/public/medical-provider';

const DoctorPage = async ({ params }) => {
  const doctorId = params?.doctorId || '';

  const queryClient = await prefetchPublicMedicalProvidersById(
    doctorId
  );

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DoctorInfo id={doctorId} />
        <DoctorReviews />
      </HydrationBoundary>
      <MobileApp data={MOBILE_APP} />
    </main>
  );
};

export default DoctorPage;
