import { MOBILE_APP, TEAM } from '@/data';
import { MobileApp } from '@/guest/_components/sections';
import { DoctorInfo } from './_components/doctor-info';
import { DoctorReviews } from './_components/doctor-reviews';

const DoctorPage = ({ params }) => {
  const doctorId = params?.doctorId || '';

  const data = TEAM.find((item) => item.id === doctorId);

  return (
    <main>
      <DoctorInfo doctor={data} />
      <DoctorReviews data={data.reviews} />
      <MobileApp data={MOBILE_APP} />
    </main>
  );
};

export default DoctorPage;
